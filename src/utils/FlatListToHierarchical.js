/**
 * Converts the flat menu list to a hierarchical menu list.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 * @param {} data
 */

exports.FlatListToHierarchical = (
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) => {
  const tree = []
  const childrenOf = {}
  data.forEach(item => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    newItem.type = `link`
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

exports.ensureTrailingSlash = str => (str.endsWith("/") ? str : `${str}/`)
