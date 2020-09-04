import React, { useEffect, useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import layoutStyles from "./layout.module.scss"
import Transition from "../components/transition"
import PropTypes from "prop-types"
import { gsap, TweenLite } from "gsap"
const Layout = ({ children, location }) => {
  let app = useRef(null)
  useEffect(() => {
    TweenLite.to(app, 0, { css: { visibility: "visible" } })
  }, [app])
  return (
    <div ref={el => (app = el)} className={layoutStyles.app}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          <Transition location={location}>{children}</Transition>
        </div>

        <Footer />
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
