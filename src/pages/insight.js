import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Insight from "../components/Insight/Insight"

const Insights = props => {
  return (
    <Layout>
      <SEO title="Insight" />
      <Insight path={props} />
    </Layout>
  )
}

export default Insights
