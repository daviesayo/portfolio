import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import contactStyles from "./contact.module.scss"
import gsap from "gsap"
function ContactContent() {
  let line1 = useRef(null)
  let line2 = useRef(null)
  let socials = useRef(null)

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.2,
      ease: "power3.out",
      y: 144,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from([socials], {
      delay: 0.8,
      opacity: 0,
      ease: "power3.out",
      y: -100,
    })
  }, [line1, line2, socials])
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className={contactStyles.contact_left}>
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
        <div ref={el => (socials = el)} className="">
          <p
            className={contactStyles.contact_para}
            style={{ fontWeight: 700, color: "red" }}
          >
            Where to find me
          </p>
          <ul className={contactStyles.social_links}>
            <a href="mailto:makintomo04@hotmail.co.uk" target="_blank">
              {" "}
              <li>
                <i class="fas fa-envelope"></i> Makintomo04@hotmail.co.uk
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-akintomo/"
              target="_blank"
            >
              <li>
                <i class="fab fa-linkedin"></i> Michael-Akintomo
              </li>
            </a>
            <a href="https://github.com/Makintomo04" target="_blank">
              <li>
                <i class="fab fa-github"></i> Makintomo04
              </li>
            </a>
            <a href="https://twitter.com/MadeByM1KE" target="_blank">
              {" "}
              <li>
                <i class="fab fa-twitter"></i> MadeByM1KE
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className={contactStyles.form} style={{ marginTop: "20rem" }}>
        <form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter Name"></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter email"></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  )
}
export default ContactContent
