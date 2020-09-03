import React, { useEffect, useRef } from "react"
import heroStyles from "./hero.module.scss"
import arrow from "../icons/arrow.png"
import arrow2 from "../icons/arrow2.png"
// import nameSpinner from "../icons/name-spinner.png"
import nameSpinner1 from "../icons/name-spinner1.png"
import nameSpinner2 from "../icons/name-spinner2.png"
import Typical from "react-typical"
import { gsap } from "gsap"
// import $ from "jquery"

function Hero() {
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let desc = useRef(null)
  let blind1 = useRef(null)
  let blind2 = useRef(null)
  let blind3 = useRef(null)

  useEffect(() => {
    gsap.to([blind1, blind2, blind3], 0.4, {
      delay: 2.5,
      ease: "power3.out",
      y: 1090,
      stagger: {
        amount: 0.5,
      },
    })
  }, [blind1, blind2, blind3])
  useEffect(() => {
    gsap.from([line1, line2, line3], 0.8, {
      delay: 3.3,
      ease: "power3.out",
      y: 144,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from([desc], 0.8, {
      delay: 3.3,
      ease: "power3.out",
      y: -180,
    })
  }, [line1, line2, line3, desc])
  return (
    <>
      <div className={heroStyles.preloadBg}>
        <img src={nameSpinner1} className={heroStyles.preloader} />
        <div className={heroStyles.blinds}>
          <div ref={el => (blind1 = el)} className={heroStyles.blind}></div>
          <div ref={el => (blind2 = el)} className={heroStyles.blind}></div>
          <div ref={el => (blind3 = el)} className={heroStyles.blind}></div>
        </div>
      </div>
      <div className={heroStyles.container}>
        {/* <h1 className={heroStyles.intro}>
        Hello
        <span className={heroStyles.intro} style={{ color: "red" }}>
          .
        </span>
        <br />
        I'm
        <br />
        <span className={heroStyles.intro} style={{ color: "red" }}>
          Michael
        </span>
      </h1> */}{" "}
        <div className={heroStyles.inner}>
          <h1>
            <div className={heroStyles.line_wrap}>
              <div ref={el => (line1 = el)} className={heroStyles.line}>
                Hello<span style={{ color: "red" }}>.</span>
              </div>
            </div>
            <div className={heroStyles.line_wrap}>
              <div ref={el => (line2 = el)} className={heroStyles.line}>
                I'm
              </div>
            </div>
            <div className={heroStyles.line_wrap}>
              <div
                ref={el => (line3 = el)}
                style={{ color: "red" }}
                className={heroStyles.line}
              >
                Michael
              </div>
            </div>
          </h1>
          <div className={heroStyles.desc_wrap}>
            <div ref={el => (desc = el)} className={heroStyles.desc}>
              <img src={arrow} height="130px" width="130px" />
              <p className={heroStyles.heroPara}>
                I'm a <br />
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "frontend developer.",
                    1000,
                    "computer science graduate.",
                    1000,
                    "3D artist",
                    1000,
                    "graphic Designer.",
                    1000,
                  ]}
                ></Typical>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <p
              // style={{ color: "red", fontSize: "2rem" }}
              className={heroStyles.textReveal}
            >
              <span className={heroStyles.arrow}>
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>{" "}
              PSST! Hover Here! <i class="fas fa-palette"></i>
            </p>

            <div className={heroStyles.sideWrap}>
              <div className={heroStyles.side}>
                {" "}
                <h1>
                  <span style={{ fontSize: "16px", lineHeight: ".5" }}>
                    Oh hey there, While you're here...
                  </span>
                  <br />
                  <a href="https://www.madebym1ke.com" target="_blank">
                    Visit My Art <br />
                    Portfolio.
                  </a>
                </h1>
              </div>
              {/* <img src={nameSpinner2} className={heroStyles.amper} /> */}
              {/* <h1 className={heroStyles.amper}>&</h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
