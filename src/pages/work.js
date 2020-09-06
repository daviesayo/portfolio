import React from "react"
import WorkContent from "../components/WorkContent"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Cursor from "../components/Cursor"
function work({ data }) {
  return (
    <div>
      <SEO title="work" description={data.description} />
      <Head title="Work" />
      <Cursor />
      <WorkContent />
    </div>
  )
}

export default work
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
