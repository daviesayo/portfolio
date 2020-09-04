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
    >
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

export default Head
