/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Generate pages
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all the data
  const queryResult = await graphql(`
    {
      pageQuery: allWpPage {
        nodes {
          databaseId
          uri
        }
      }
      postQuery: allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            databaseId
            uri
          }
          next {
            databaseId
          }
          previous {
            databaseId
          }
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  // Generate single page pages
  const pages = queryResult.data.pageQuery.nodes
  pages.forEach(page => {
    createPage({
      path: page.uri,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        databaseId: page.databaseId,
      },
    })
  })

  // Generate single post pages
  const posts = queryResult.data.postQuery.edges
  posts.forEach(post => {
    createPage({
      path: `/posts${post.node.uri}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        databaseId: post.node.databaseId,
        nextId: post.next ? post.next.databaseId : null,
        prevId: post.previous ? post.previous.databaseId : null,
      },
    })
  })

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 4, // How many items you want per page
    pathPrefix: "/posts", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/posts-index.js`), // Just like `createPage()`
  })
}
