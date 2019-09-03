import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import League from "../components/League/League"

const Leagues = props => {
  return (
    <Layout>
      <SEO title="League" />
      <League path={props} />
    </Layout>
  )
}

export default Leagues
