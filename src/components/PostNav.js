import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./PostNav.module.css"

const PostNav = ({ prevPost, nextPost }) => {
  return (
    <nav className={styles.postnav}>
      {prevPost && (
        <Link to={`/posts${prevPost.uri}`}>
          <div className={styles.postnav__head}>Previous post:</div>
          <div className={styles.postnav__title}>{prevPost.title}</div>
        </Link>
      )}

      {nextPost && (
        <Link to={`/posts${nextPost.uri}`}>
          <div className={styles.postnav__head}>Next post:</div>
          <div className={styles.postnav__title}>{nextPost.title}</div>
        </Link>
      )}
    </nav>
  )
}

export default PostNav
