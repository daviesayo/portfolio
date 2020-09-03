import React, { useEffect, useRef } from "react"
import htmlIcon from "../icons/html_icon.png"
import cssIcon from "../icons/css_icon.png"
import jsIcon from "../icons/js_icon.png"
import gatsbyIcon from "../icons/gatsby.png"
import graphQLIcon from "../icons/graphQL_Logo.png"
import gitIcon from "../icons/git_icon.png"
import csharpIcon from "../icons/csharp_icon.png"
import javaIcon from "../icons/java_icon.png"
import npmIcon from "../icons/npm_icon.png"
import unityIcon from "../icons/unity_icon.png"
import psIcon from "../icons/photoshop_icon.png"
import aiIcon from "../icons/illustrator_icon.png"
import aeIcon from "../icons/ae_icon.png"
import figmaIcon from "../icons/figma_icon.png"
import c4dIcon from "../icons/c4d_icon.png"
import gsapIcon from "../icons/gsap_icon.png"
import cmsIcon from "../icons/contentful_icon.png"
import Typical from "react-typical"
import aboutStyles from "./about.module.scss"
import { Link } from "gatsby"
import gsap from "gsap"
function AboutContent() {
  let line1 = useRef(null)
  let para = useRef(null)

  useEffect(() => {
    gsap.from([line1], 0.8, {
      delay: 0.2,
      ease: "power3.out",
      y: 170,
    })
    gsap.from([para], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      opacity: 0,
      y: -100,
    })
  }, [line1, para])
  return (
    <div className={aboutStyles.aboutBody}>
      <h1 style={{ marginTop: "20rem" }}>
        <div className={aboutStyles.line_wrap}>
          <div ref={el => (line1 = el)} className={aboutStyles.line1}>
            About Me<span style={{ color: "red" }}>.</span>
          </div>
        </div>
      </h1>
      <p className={aboutStyles.about_para}>
        <Typical
          loop={1}
          wrapper="b"
          steps={["I'm a Front-End Developer based in London, England.", 1000]}
        ></Typical>
      </p>
      <p ref={el => (para = el)} className={aboutStyles.about_para}>
        I have a passion for web development and strive to create impactful
        experiences that positivley stimulate users. I recently graduated with a
        first class degree in Computer Science and am looking for an opportunity
        to work with a Javascript framework in a team with a focus on technical
        development and growth.
      </p>

      <div className={aboutStyles.gridContainer}>
        <p className={aboutStyles.skillsTitle}>
          <strong>SKILLS / TECHNOLOGIES</strong>
        </p>
        <div className={aboutStyles.wrapper}>
          <div className={aboutStyles.skill}>
            <img src={htmlIcon} height="64px" alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={cssIcon} height="64px" alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={jsIcon} height="64px" alt="Javascript icon" />
            <p>JAVASCRIPT</p>
          </div>
          <div className={aboutStyles.skill}>
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
              height="64px"
              alt="SASS icon"
            />
            <p>SASS</p>
          </div>
          <div className={aboutStyles.skill}>
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
              height="64px"
              alt="Bootstrap icon"
            />
            <p>BOOTSTRAP</p>
          </div>
          <div className={aboutStyles.skill}>
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              height="64px"
              alt="React icon"
            />
            <p>REACT</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={gatsbyIcon} height="64px" alt="Gatsby icon" />
            <p>GATSBY</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={graphQLIcon} height="64px" alt="GraphQL icon" />
            <p>GRAPHQL</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={gitIcon} height="64px" alt="GIT icon" />
            <p>GIT</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={csharpIcon} height="64px" alt="C Sharp icon" />
            <p>C#</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={javaIcon} height="64px" alt="Java icon" />
            <p>JAVA</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={npmIcon} height="64px" alt="NPM icon" />
            <p>NPM</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={unityIcon} height="64px" alt="Unity3D icon" />
            <p>UNITY</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={psIcon} height="64px" alt="Photoshop icon" />
            <p>PHOTOSHOP</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={aiIcon} height="64px" alt="Adobe Illustrator icon" />
            <p>ILLUSTRATOR</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={aeIcon} height="64px" alt="After Effects icon" />
            <p>AFTER EFFECTS</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={figmaIcon} height="64px" alt="figma icon" />
            <p>FIGMA</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={c4dIcon} height="64px" alt="Cinema4D icon" />
            <p>CINEMA 4D</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={gsapIcon} height="64px" alt="GSAP icon" />
            <p>GSAP</p>
          </div>
          <div className={aboutStyles.skill}>
            <img src={cmsIcon} height="64px" alt="Contentful icon" />
            <p>CONTENTFUL</p>
          </div>
        </div>
      </div>
      {/* <img src={nameSpinner2} className={aboutStyles.amper} /> */}
      <p className={aboutStyles.about_para2}>
        Ultimately, as a developer I'd like to progress into creating mobile
        applications as well as web apps and also incorporate my other passion
        in 3D art into my development work to create stunning sites to take user
        experience and interactions to the next level.
      </p>
      <p className={aboutStyles.about_para2}>
        When im not busy coding away, I enjoy gaming{" "}
        <span role="img" aria-label="game">
          🎮
        </span>
        , learning to play the guitar{" "}
        <span role="img" aria-label="guitar">
          🎸
        </span>
        , reading blogs{" "}
        <span role="img" aria-label="book">
          📖
        </span>
        , binge-watching Netflix{" "}
        <span role="img" aria-label="tv">
          📺
        </span>
        , creating art{" "}
        <span role="img" aria-label="paint palette">
          🎨
        </span>
        and eating good food{" "}
        <span role="img" aria-label="food">
          🍲
        </span>
        .
      </p>
      <p className={aboutStyles.about_para2}>
        If you'd like to learn more about what makes me tick <br />
        feel free to{" "}
        <Link to="/contact" style={{ color: "red" }}>
          get in touch.
        </Link>
      </p>
    </div>
  )
}

export default AboutContent
