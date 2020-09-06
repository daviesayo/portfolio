import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import layoutStyles from "./layout.module.scss"
import Transition from "../components/transition"
import PropTypes from "prop-types"
import { gsap, TweenLite } from "gsap"
import Cursor from "../components/Cursor"
const Layout = ({ children, location }) => {
  // let app = useRef(null)
  // useEffect(() => {
  //   TweenLite.to(app, 0, { css: { visibility: "visible" } })
  // }, [app])
  return (
    <div className={layoutStyles.app}>
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
