import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HomePage.js/Hero"
import ContentSection from "../components/HomePage.js/ContentSection"
import ContentSection2 from "../components/HomePage.js/ContentSection2"
import ContentSection3 from "../components/HomePage.js/ContentSection3"

const IndexPage = () => (
  <Layout fullWidth={true}>
    <SEO title="home" />

    <Hero />
    <ContentSection></ContentSection>
    <ContentSection2></ContentSection2>
    <ContentSection3></ContentSection3>
  </Layout>
)

export default IndexPage
