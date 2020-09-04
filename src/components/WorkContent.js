import React, { useEffect, useRef } from "react"
import workStyles from "./work.module.scss"
import gsap from "gsap"
import { useStaticQuery, graphql } from "gatsby"

function WorkContent() {
  let line1 = useRef(null)
  let para = useRef(null)
  let projects = useRef(null)

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
    gsap.from([projects], 0.8, {
      delay: 1.6,
      ease: "power3.out",
      opacity: 0,
      y: 100,
    })
  }, [line1, para, projects])

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

  return (
    <div className={workStyles.workBody}>
      <h1 className={workStyles.heading}>
        <div className={workStyles.line_wrap}>
          <div ref={el => (line1 = el)} className={workStyles.line1}>
            My Work<span style={{ color: "red" }}>.</span>
          </div>
        </div>
      </h1>
      <p ref={el => (para = el)} className={workStyles.about_para}>
        These are some of my favorite projects. Feel free to take a look at the
        projects I've worked on. If you'd prefer,{" "}
        <a
          style={{ color: "red" }}
          href="https://github.com/Makintomo04"
          target="_blank"
          rel="noreferrer"
        >
          you can take a look at my github profile directly.
        </a>
      </p>
      <div className={workStyles.gridContainer}>
        <div ref={el => (projects = el)} className={workStyles.grid}>
          {data.allContentfulPortfolioWork.edges.map(({ node }) => {
            return (
              <div className={workStyles.card}>
                <h2 className={workStyles.num}>{`0${node.projectNo}`}</h2>
                <div className={workStyles.card__inner}>
                  <div className={workStyles.inner__thumbnail}>
                    <a href={node.liveLink} target="_blank" rel="noreferrer">
                      <img
                        src={node.thumbnail.file.url}
                        alt={node.projectTitle}
                      />
                    </a>
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
                        <a
                          href={node.githubLink}
                          className={workStyles.projButton}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Code
                        </a>
                        <a
                          href={node.liveLink}
                          className={workStyles.projButton}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default WorkContent
