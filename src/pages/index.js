import React from "react"
import Hero from "../components/Hero"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Cursor from "../components/Cursor"

function index({ data }) {
  return (
    <div>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <Head title="Home" />
      <Cursor />
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
