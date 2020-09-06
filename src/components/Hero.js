import React, { useEffect, useRef } from "react"
import heroStyles from "./hero.module.scss"
import arrow from "../icons/arrow.png"
import nameSpinner1 from "../icons/name-spinner1.png" //Webp file format not yet supported on ios
import Typical from "react-typical"
import { gsap } from "gsap"

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
      y: 2000,
      stagger: {
        amount: 0.5,
      },
    })
  }, [blind1, blind2, blind3])
  useEffect(() => {
    gsap.from([line1, line2, line3], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: 170,
      stagger: {
        amount: 0.2,
      },
    })
    gsap.from([desc], 0.8, {
      delay: 3,
      ease: "power3.out",
      y: -180,
    })
  }, [line1, line2, line3, desc])
  return (
    <>
      <div className={heroStyles.preloadBg}>
        <img
          src={nameSpinner1}
          className={heroStyles.preloader}
          alt="preloader"
        />
        <div className={heroStyles.blinds}>
          <div ref={el => (blind1 = el)} className={heroStyles.blind}></div>
          <div ref={el => (blind2 = el)} className={heroStyles.blind}></div>
          <div ref={el => (blind3 = el)} className={heroStyles.blind}></div>
        </div>
      </div>
      <div className={heroStyles.heroBody}>
        <div className={heroStyles.container}>
          <div className={heroStyles.inner}>
            <h1 className={heroStyles.heading}>
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
                <img classname={heroStyles.bigArrow} src={arrow} alt="arrow" />
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
                      "3D artist.",
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
            <div>
              <p className={heroStyles.textReveal}>
                <span className={heroStyles.arrow}>
                  <i class="fas fa-long-arrow-alt-right"></i>
                </span>{" "}
                PSST! Hover Here! <i class="fas fa-palette"></i>
              </p>

              <div className={heroStyles.sideWrap}>
                <div className={heroStyles.side}>
                  {" "}
                  <h1>
                    <span>Oh hey there, While you're here...</span>
                    <br />
                    <a
                      href="https://www.madebym1ke.com"
                      target="_blank"
                      rel="noreferrer"
                    >
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
      </div>
    </>
  )
}

export default Hero
