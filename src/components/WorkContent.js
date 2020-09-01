import React, { useEffect, useRef } from "react"
// import Layout from "../layouts/index"
import workStyles from "./work.module.scss"
import gsap from "gsap"
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
        <div className={workStyles.card}>
          <h2 className={workStyles.num}>01</h2>
          <div className={workStyles.card__inner}>
            <div className={workStyles.inner__thumbnail}></div>
            <div className={workStyles.inner__desc}>
              <div className={workStyles.inner__desc__left}>
                <h2 className={workStyles.projectTitle}>Project 1</h2>
                <p>Web Design</p>
              </div>
              <div className={workStyles.inner__desc__right}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit numquam, laborum quis velit eos ad rem debitis quas
                  temporibus id?
                </p>
                <div className={workStyles.buttons}>
                  {" "}
                  <button>
                    <a href="#">See Code</a>
                  </button>
                  <button>
                    <a href="#">Live Site</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={workStyles.card}>
          <h2 className={workStyles.num}>02</h2>
          <div className={workStyles.card__inner}>
            <div className={workStyles.inner__thumbnail}></div>
            <div className={workStyles.inner__desc}>
              <div className={workStyles.inner__desc__left}>
                <h2 className={workStyles.projectTitle}>Project 2</h2>
                <p>Web Design</p>
              </div>
              <div className={workStyles.inner__desc__right}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit numquam, laborum quis velit eos ad rem debitis quas
                  temporibus id?
                </p>
                <div className={workStyles.buttons}>
                  {" "}
                  <button>
                    <a href="#">See Code</a>
                  </button>
                  <button>
                    <a href="#">Live Site</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={workStyles.card}>
          <h2 className={workStyles.num}>03</h2>
          <div className={workStyles.card__inner}>
            <div className={workStyles.inner__thumbnail}></div>
            <div className={workStyles.inner__desc}>
              <div className={workStyles.inner__desc__left}>
                <h2 className={workStyles.projectTitle}>Project 3</h2>
                <p>Web Design</p>
              </div>
              <div className={workStyles.inner__desc__right}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit numquam, laborum quis velit eos ad rem debitis quas
                  temporibus id?
                </p>
                <div className={workStyles.buttons}>
                  {" "}
                  <button>
                    <a href="#">See Code</a>
                  </button>
                  <button>
                    <a href="#">Live Site</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={workStyles.card}>
          <h2 className={workStyles.num}>04</h2>
          <div className={workStyles.card__inner}>
            <div className={workStyles.inner__thumbnail}></div>
            <div className={workStyles.inner__desc}>
              <div className={workStyles.inner__desc__left}>
                <h2 className={workStyles.projectTitle}>Project 4</h2>
                <p>Web Design</p>
              </div>
              <div className={workStyles.inner__desc__right}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit numquam, laborum quis velit eos ad rem debitis quas
                  temporibus id?
                </p>
                <div className={workStyles.buttons}>
                  {" "}
                  <button>
                    <a href="#">See Code</a>
                  </button>
                  <button>
                    <a href="#">Live Site</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WorkContent
