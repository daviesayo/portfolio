import React from "react"
import Head from "../components/Head"
import NotFoundContent from "../components/NotFoundContent"
import Cursor from "../components/Cursor"

function NotFound() {
  return (
    <div>
      <Head title="404" />
      <Cursor />
      <NotFoundContent />
    </div>
  )
}

export default NotFound
