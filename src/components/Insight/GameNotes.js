import React, { Component } from "react"
import styled from "styled-components"
import NLP from "./../../lib/NLP"

export default class GameNotes extends Component {
  render() {
    const { data } = this.props
    if (!data) {
      return <Container />
    }
    return (
      <Container>
        <h2>Game Notes</h2>
        <Text>
          The {data.gameNotes.margin} point margin of victory for this matchup
          ended up being the{" "}
          {NLP.highLowHelper(data.gameNotes.marginOfVictoryRank)} in the league
          this week.
        </Text>
      </Container>
    )
  }
}
const Container = styled.div`
  padding: 1.5rem 1rem;
  margin: 0;
`
const Text = styled.p`
 font-size: .95rem;
 margin: 0.5rem 0;

`
