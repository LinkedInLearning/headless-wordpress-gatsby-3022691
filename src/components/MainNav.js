/**
 * Creates flat menu based on WordPress data
 */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "../utils/UniversalLink"

import * as styles from "./mainNav.module.css"

const MainNav = () => {
  const wpMenu = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: {
          menu: { node: { slug: { eq: "all-pages" } } }
          parentDatabaseId: { eq: 0 }
        }
      ) {
        nodes {
          title: label
          path
        }
      }
    }
  `)

  const menuItems = wpMenu.allWpMenuItem.nodes

  return (
    <nav className={styles.mainnav}>
      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <UniversalLink to={menuItem.path} activeClassName="current-page">
                {menuItem.title}
              </UniversalLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
