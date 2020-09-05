import React from "react"
import { Link } from "gatsby"
import nfStyles from "./notFound.module.scss"
function NotFoundContent() {
  return (
    <div className={nfStyles.nfBody}>
      <h1 className={nfStyles.heading}>
        Oops Page Not Found<span style={{ color: "red" }}>.</span>
      </h1>
      <Link className={nfStyles.return} to="/">
        Return Home
      </Link>
    </div>
  )
}

export default NotFoundContent
