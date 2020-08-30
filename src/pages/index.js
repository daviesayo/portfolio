import React from "react"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet"
import Layout from "../layouts/index"
import { gsap } from "gsap"
import { CSSTransition } from "react-transition-group"
// import "../styles/index.scss"
function index() {
  return (
    <div>
      <Layout location="/">
        <Hero />
      </Layout>
    </div>
  )
}

export default index
