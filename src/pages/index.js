import React from "react"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

// import "../styles/index.scss"
function index() {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default index
