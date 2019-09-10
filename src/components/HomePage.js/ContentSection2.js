import React, { Component } from "react"
import styled from "styled-components"
import { Container } from "@material-ui/core"

export default class ContentSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Insightful is Always Improving</h1>
          <p>
            Insightful is a work in progress and the passion project of a team
            of one. Please be patient if you discover any bugs or issues. I will
            do my best to address them quickly and deliver content to enhance
            your fantasy league each and every week.
          </p>
          <p>
            Throughout the season there will be incremental tweaks to the look
            and feel of Insightful. I will be adding additional features weekly,
            I hope, including more league-wide and individual matchup content.
          </p>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 3.5rem 0;
  color: rgba(255, 255, 255, 0.95);
  background: var(--primary-color);
  font-size: 1.4rem;
  line-height: 1.25;
  h1 {
    font-family: "Ubuntu";
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`
