import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./Pagination.module.css"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav className={styles.pagenav}>
      <div className={styles.pagenav__item}>
        {previousPagePath && <Link to={previousPagePath}>← Newer Posts</Link>}
      </div>

      <div className={styles.pagenav__item}>
        {nextPagePath && <Link to={nextPagePath}>Older Posts →</Link>}
      </div>
    </nav>
  )
}

export default Pagination
