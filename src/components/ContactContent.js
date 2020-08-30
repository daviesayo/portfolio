import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import contactStyles from "./contact.module.scss"
import gsap from "gsap"
function ContactContent() {
  let line1 = useRef(null)
  let line2 = useRef(null)

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.2,
      ease: "power3.out",
      y: 144,
      stagger: {
        amount: 0.2,
      },
    })
  }, [line1, line2])
  return (
    <div>
      <h1 style={{ marginTop: "20rem" }}>
        <div className={contactStyles.line_wrap}>
          <div ref={el => (line1 = el)} className={contactStyles.line1}>
            Get in
          </div>
        </div>
        <div className={contactStyles.line_wrap}>
          <div ref={el => (line2 = el)} className={contactStyles.line2}>
            Touch<span style={{ color: "red" }}>.</span>
          </div>
        </div>
      </h1>
    </div>
  )
}
export default ContactContent
