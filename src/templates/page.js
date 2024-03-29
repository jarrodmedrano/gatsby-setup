import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    </Layout>
  )
}
