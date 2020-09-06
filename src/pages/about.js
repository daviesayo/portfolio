import React from "react"
import AboutContent from "../components/AboutContent"
import Head from "../components/Head"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Cursor from "../components/Cursor"
import useDeviceDetect from "../utils/useDeviceDetect"
function about({ data }) {
  const { isMobile } = useDeviceDetect
  return (
    <div>
      <SEO title="about" description={data.description} />
      <Head title="About" />
      <Cursor />
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
