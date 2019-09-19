import React, { Component } from "react"
import styled from "styled-components"
import { styled as MUIStyled } from "@material-ui/styles"

import { Container } from "@material-ui/core"

export default class ContentSection extends Component {
  render() {
    return (
      <StyledContainer>
        <h1>Custom Analysis and Breakdowns for your League</h1>
        <Grid>
          <div>
            <h2>League-wide Breakdowns</h2>
            <p>
              Get a snapshot all the matchups in your league, including the top
              players, the worst roster decisions, and more
            </p>
          </div>
          <div>
            <h2>Analyis for each matchup</h2>
            <p>
              See the good and bad roster decisions, what-if scenarios, game
              notes, and scoring visualizations
            </p>
          </div>
          <div>
            <h2>Delivered to you weekly</h2>
            <p>
              We email you as soon as the analysis and breakdown for your league
              is ready, check your inbox every Wednesday morning
            </p>
          </div>
        </Grid>
      </StyledContainer>
    )
  }
}

const StyledContainer = MUIStyled(Container)({
  padding: "2rem 1.5rem",
  marginBottom: "3rem",
  marginTop: "3rem",
  "& h1": {
    textAlign: "center",
    margin: "0 0 3rem 0",
    fontSize: "2.5rem",
    fontFamily: "Ubuntu",
  },
  "& h2": {
    fontFamily: "Ubuntu",
    textAlign: "center",
    margin: ".75rem 0",
    fontSize: "1.5rem",
  },
})

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
