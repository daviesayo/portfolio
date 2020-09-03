import React from "react"
import headerStyles from "./header.module.scss"
import layoutStyles from "../layouts/layout.module.scss"
import { Link } from "gatsby"
import "../styles/index.scss"
import Logo from "../icons/pesonal_dev_logo2.png"
function Header() {
  const handleClick = () => {}
  return (
    <div className={headerStyles.header_wrap}>
      <header className={headerStyles.header}>
        <Link to="/" className={headerStyles.logo} aria-label="Home">
          <img className={headerStyles.logo} src={Logo} alt="logo" />
          {/* <h2
            className="magic-hover magic-hover__square"
            style={{ lineHeight: "1.4rem" }}
          >
            MICHAEL <br />
            AKINTOMO
          </h2> */}
        </Link>
        <nav>
          <ul className={headerStyles.nav}>
            {/* <li className={headerStyles.li}>
              <Link
                className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
                activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
                to="/"
              >
                Home
              </Link>
            </li> */}
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
        <div className={headerStyles.ham} onClick={handleClick}>
          <i class="fas fa-bars"></i>
        </div>
      </header>
    </div>
  )
}

export default Header
