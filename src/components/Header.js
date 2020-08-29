import React from "react"
import headerStyles from "./header.module.scss"
import "../styles/index.scss"
function Header() {
  return (
    <header className={headerStyles.header}>
      <div className="logo">
        <h2 style={{ lineHeight: "1.4rem" }}>
          MICHAEL <br />
          AKINTOMO
        </h2>
      </div>
      <nav>
        <ul className={headerStyles.nav}>
          <li className={headerStyles.li}>
            <a className={headerStyles.a}>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
