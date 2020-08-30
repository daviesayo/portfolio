import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/index"
import ContactContent from "../components/ContactContent"
// import "../styles/index.scss"
function contact() {
  return (
    <div>
      <Layout location="/contact">
        <ContactContent />
      </Layout>
    </div>
  )
}

export default contact
