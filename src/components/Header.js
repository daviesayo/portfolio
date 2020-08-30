import React from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"
import "../styles/index.scss"
function Header() {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.logo}>
        <h2
          className="magic-hover magic-hover__square"
          style={{ lineHeight: "1.4rem" }}
        >
          MICHAEL <br />
          AKINTOMO
        </h2>
      </Link>
      <nav>
        <ul className={headerStyles.nav}>
          <li className={headerStyles.li}>
            <Link
              className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
              activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
              activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
              activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
              to="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
              activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
