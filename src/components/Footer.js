import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.scss"
import flowerImg from "../icons/flower.png"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    // <div>
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, © 2020{" "}
        <img
          className={footerStyles.flower}
          src={flowerImg}
          alt="spinner"
          height="16px"
        />
      </p>
    </footer>
    // {/* </div> */}
  )
}

export default Footer
