import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/index"
import ContactContent from "../components/ContactContent"
import Head from "../components/Head"
import SEO from "../components/seo"
// import "../styles/index.scss"
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
