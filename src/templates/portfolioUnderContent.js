import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems";

export default ({ pageContext }) => {
  return (
    <Layout>
      <PortfolioItems />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    </Layout>
  )
}
