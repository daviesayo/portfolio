import React from "react"
import Hero from "../components/Hero"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Cursor from "../components/Cursor"

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
