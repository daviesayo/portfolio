import React from "react"
import heroStyles from "./hero.module.scss"
function Hero() {
  return (
    <div className={heroStyles.container}>
      <h1>
        Hello<span style={{ color: "red" }}>.</span>
        <br /> I'm <br /> <span style={{ color: "red" }}>Michael</span>
      </h1>
      <p className={heroStyles.p}>I'm a frontend developer</p>
    </div>
  )
}

export default Hero
