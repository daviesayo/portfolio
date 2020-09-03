import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/index"
import WorkContent from "../components/WorkContent"
import Head from "../components/Head"
import SEO from "../components/seo"
// import "../styles/index.scss"
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
