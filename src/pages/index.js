import React from "react"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet"
import Layout from "../layouts/index"
import { gsap } from "gsap"
import { CSSTransition } from "react-transition-group"
import Head from "../components/Head"
import SEO from "../components/seo"
// import "../styles/index.scss"
function index({ data }) {
  return (
    <div>
      <SEO title={data.title} description={data.description} />
      <Head title="Home" />
      <Hero />
    </div>
  )
}

export default index

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
