import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/index"
import WorkContent from "../components/WorkContent"
// import "../styles/index.scss"
function work() {
  return (
    <div>
      <Layout location="/work">
        <WorkContent />
      </Layout>
    </div>
  )
}

export default work
