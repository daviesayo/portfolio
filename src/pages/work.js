import React from "react"
import WorkContent from "../components/WorkContent"
import Head from "../components/Head"
import SEO from "../components/seo"

function work({ data }) {
  return (
    <div>
      <SEO title="work" description={data.description} />
      <Head title="Work" />
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
