import React from "react"
import ContactContent from "../components/ContactContent"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
function contact({ data }) {
  return (
    <div>
      <SEO title="contact" description={data.description} />
      <Head title="Contact" />
      <ContactContent />
    </div>
  )
}

export default contact
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
