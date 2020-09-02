import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import workStyles from "./work.module.scss"
import gsap from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function WorkContent() {
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

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioWork(
        filter: {}
        sort: { fields: projectNo, order: ASC }
      ) {
        edges {
          node {
            projectNo
            thumbnail {
              file {
                url
              }
            }
            projectTitle
            projectType
            projectDesc
            githubLink
            liveLink
          }
        }
      }
    }
  `)
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  }
  return (
    <div className={workStyles.workBody}>
      <h1 style={{ marginTop: "20rem" }}>
        <div className={workStyles.line_wrap}>
          <div ref={el => (line1 = el)} className={workStyles.line1}>
            My Work<span style={{ color: "red" }}>.</span>
          </div>
        </div>
      </h1>
      <p ref={el => (para = el)} className={workStyles.about_para}>
        These are some of my favorite projects.
      </p>

      <Slider {...settings}>
        {/* <div id="glider"> */}
        {data.allContentfulPortfolioWork.edges.map(({ node }) => {
          return (
            <div className={workStyles.cont}>
              <div className={workStyles.card}>
                <h2 className={workStyles.num}>{`0${node.projectNo}`}</h2>
                <div className={workStyles.card__inner}>
                  <div className={workStyles.inner__thumbnail}>
                    <img src={node.thumbnail.file.url} />
                  </div>
                  <div className={workStyles.inner__desc}>
                    <div className={workStyles.inner__desc__left}>
                      <h2 className={workStyles.projectTitle}>
                        {node.projectTitle}
                      </h2>
                      <p>{node.projectType}</p>
                    </div>
                    <div className={workStyles.inner__desc__right}>
                      <p className={workStyles.summary}>{node.projectDesc}</p>
                      <div className={workStyles.buttons}>
                        {" "}
                        <button className={workStyles.projButton}>
                          <a href={node.githubLink} target="_blank">
                            See Code
                          </a>
                        </button>
                        <button className={workStyles.projButton}>
                          <a href={node.liveLink} target="_blank">
                            Live Site
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {/* </div> */}
      </Slider>
    </div>
  )
}
export default WorkContent
