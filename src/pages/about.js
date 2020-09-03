import React, { useEffect, useRef } from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/index"
import aboutStyles from "../components/about.module.scss"
import gsap from "gsap"
import AboutContent from "../components/AboutContent"
import Head from "../components/Head"
import SEO from "../components/seo"
// import "../styles/index.scss"
function about({ data }) {
  return (
    <div>
      <SEO title="about" description={data.description} />
      <Head title="About" />
      <AboutContent />
    </div>
  )
}

export default about
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
