import React from "react"
import heroStyles from "./hero.module.scss"
import arrow from "../icons/arrow.png"
import arrow2 from "../icons/arrow2.png"
import nameSpinner from "../icons/name-spinner.png"
import nameSpinner2 from "../icons/name-spinner2.png"
import Typical from "react-typical"
function Hero() {
  return (
    <div className={heroStyles.container}>
      <h1 className={heroStyles.intro}>
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
      </h1>
      <div className={heroStyles.desc}>
        <img src={arrow} height="130px" width="130px" />
        <p className={heroStyles.p}>
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
              "food enthusiast.",
              1000,
            ]}
          ></Typical>
        </p>
      </div>
      <div>
        {/* <img src={nameSpinner2} className={heroStyles.amper} /> */}
        {/* <h1 className={heroStyles.amper}>&</h1> */}
      </div>
    </div>
  )
}

export default Hero
