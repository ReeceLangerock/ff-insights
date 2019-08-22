import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <h1>Insightful</h1>

      <p>
        Take your ESPN fantasy football league to the next level with
        automatically generated matchup analysis and breakdowns. Each week, Insightful will take the
        results of your matchup and create a report detailing the good and bad
        decisions you and your opponent made. Trash talk is always better when
        you have data to back it up.
      </p>
      <p>
        As you can clearly see, this site is very much a work in progress. It is
        the passion project of a team of one. I plan to have most of the basic
        functionality up and running for the start of the NFL season. Throughout
        the season there will be incremental updates to the look and feel of the
        site along with the automatically created content.
      </p>
      <p>
        Much like any fantasy season it will be a bumpy ride. There{" "}
        <strike>might</strike> will be bugs and things might not always work as
        they're supposed to, but I will do my best to deliver content to enhance
        your fantasy league each and every week.
      </p>

      <p className ="bold">
        Questions? Comments? Suggestions? I want to hear from you!{" "}
      </p>
      <p>
        I'll be setting up a comment or email system sometime in the future, but
        for now add a post on our reddit channel!{" "}
        <a href="https://www.reddit.com/r/Insightful_FF/">Insightful_FF</a>
      </p>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  a {
    font-weight: bold;
    color: #c83802;
    text-decoration: none;
    font-size: 1.2rem;
    :hover {
      text-decoration: underline;
    }
  }
  .bold {
    font-weight: bold;
  }
  font-size: 1.1rem;
  line-height: 1.5;
`
