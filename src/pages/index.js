import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HomePage/Hero"
import ContentSection from "../components/HomePage/ContentSection"
import ContentSection2 from "../components/HomePage/ContentSection2"
import ContentSection3 from "../components/HomePage/ContentSection3"

const IndexPage = () => (
  <Layout fullWidth={true}>
    <SEO title="Home" />

    <Hero />
    <ContentSection></ContentSection>
    <ContentSection2></ContentSection2>
    <ContentSection3></ContentSection3>
  </Layout>
)

export default IndexPage
