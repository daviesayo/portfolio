import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import workStyles from "./work.module.scss"
import gsap from "gsap"
import { useStaticQuery, graphql } from "gatsby"
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
      allContentfulPortfolioWork {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={workStyles.grid}>
        {data.allContentfulPortfolioWork.edges.map(({ node }) => {
          return (
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
                    <p>{node.projectDesc}</p>
                    <div className={workStyles.buttons}>
                      {" "}
                      <button>
                        <a href={node.githubLink} target="_blank">
                          See Code
                        </a>
                      </button>
                      <button>
                        <a href={node.liveLink} target="_blank">
                          Live Site
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default WorkContent
