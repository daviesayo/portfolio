import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <Helmet
      title={
        props.title && `${props.title} | ${data.site.siteMetadata.author}`
        // : `${data.site.siteMetadata.author}`
      }
    />
  )
}

export default Head
