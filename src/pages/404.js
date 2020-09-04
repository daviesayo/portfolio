import React from "react"
import Head from "../components/Head"
import NotFoundContent from "../components/NotFoundContent"
function notFound() {
  return (
    <div>
      <Head title="404" />
      <NotFoundContent />
    </div>
  )
}

export default notFound