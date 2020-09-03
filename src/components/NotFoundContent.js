import React from "react"
import { Link } from "gatsby"
function NotFoundContent() {
  return (
    <div>
      <h1 style={{ marginTop: "20rem", marginBottom: "5rem" }}>
        Oops Page Not Found
      </h1>
      <Link
        style={{
          textDecoration: "none",
          fontSize: "1.8rem",
          color: "black",
          textTransform: "uppercase",
          padding: "2rem",
          border: "2px solid black",
        }}
        to="/"
      >
        Return Home
      </Link>
    </div>
  )
}

export default NotFoundContent
