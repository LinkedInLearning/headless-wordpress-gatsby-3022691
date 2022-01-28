import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./Catlist.module.css"

const Catlist = ({ postObject }) => {
  return (
    <div className={styles.article__catlist}>
      {postObject.categories.nodes.map((category, index) => [
        index > 0 && ", ",
        <Link key={index} to={category.link}>
          {category.name}
        </Link>,
      ])}
    </div>
  )
}

export default Catlist
