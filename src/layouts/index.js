import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import layoutStyles from "./layout.module.scss"
import Transition from "../components/transition"
import PropTypes from "prop-types"
function Layout({ children, location }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Transition location={location}>{children}</Transition>
      </div>
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
