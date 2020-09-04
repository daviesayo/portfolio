import React, { useState } from "react"
import headerStyles from "./header.module.scss"
import layoutStyles from "../layouts/layout.module.scss"
import { Link } from "gatsby"
import "../styles/index.scss"
import Logo from "../icons/pesonal_dev_logo2.png"
function Header() {
  const [openNav, setOpenNav] = useState(false)
  const handleClick = () => {
    setOpenNav(!openNav)
  }
  const handleLinkClick = () => {
    setOpenNav(false)
  }
  return (
    <div className={headerStyles.header_wrap}>
      <header className={headerStyles.header}>
        <Link
          to="/"
          className={headerStyles.logo}
          aria-label="Home"
          onClick={handleLinkClick}
        >
          <img className={headerStyles.logo} src={Logo} alt="logo" />
          {/* <h2
            className="magic-hover magic-hover__square"
            style={{ lineHeight: "1.4rem" }}
          >
            MICHAEL <br />
            AKINTOMO
          </h2> */}
        </Link>
        <nav className={`${openNav == true && headerStyles.navBg}`}>
          <ul
            className={`${
              openNav == true ? headerStyles.openNav : headerStyles.nav
            }`}
          >
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
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
                activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
                to="/work"
                onClick={handleLinkClick}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={`magic-hover magic-hover__square ${headerStyles.navItem}`}
                activeClassName={`magic-hover magic-hover__square ${headerStyles.activeNavItem}`}
                to="/contact"
                onClick={handleLinkClick}
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
