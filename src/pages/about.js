import React from "react"
import AboutContent from "../components/AboutContent"
import Head from "../components/Head"
import SEO from "../components/seo"

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
