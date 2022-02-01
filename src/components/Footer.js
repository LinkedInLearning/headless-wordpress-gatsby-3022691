import * as React from "react"

import FooterNav from "./FooterNav"
import * as styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterNav />
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
