import React, { Component } from "react"
import styled from "styled-components"
import gameNotesHelper from "./../../lib/gameNotesHelper"

export default class GameNotes extends Component {
  state = {}

  async componentDidMount() {
    this.generateText()
  }

  async generateText() {
    const { data, parsedInsight } = this.props
    const { gameNotes } = data
    let texts = {}

    texts.marginText = gameNotesHelper.getMarginText(
      gameNotes.margin,
      gameNotes.marginOfVictoryRank
    )
    if (gameNotes.homePositionGroupRank && gameNotes.awayPositionGroupRank) {
      const winningNotes =
        data.homeTeam.score > data.awayTeam.score
          ? gameNotes.homePositionGroupRank
          : gameNotes.awayPositionGroupRank
      const losingNotes =
        data.homeTeam.score > data.awayTeam.score
          ? gameNotes.awayPositionGroupRank
          : gameNotes.homePositionGroupRank

      texts.winningTeamPositionNote = gameNotesHelper.getWinningTeamPositionNote(
        winningNotes,
        parsedInsight.winningTeam
      )
      texts.losingTeamPositionNote = gameNotesHelper.getLosingTeamPositionNote(
        losingNotes,
        parsedInsight.losingTeam
      )
    }
    this.setState({
      ...texts,
    })
  }
  render() {
    const { data } = this.props
    const {
      winningTeamPositionNote,
      losingTeamPositionNote,
      marginText,
    } = this.state

    if (!data) {
      return <Container />
    }

    return (
      <Container>
        <h2>Game Notes</h2>
        <Text>{marginText}</Text>
        <Text>{winningTeamPositionNote}</Text>
        <Text>{losingTeamPositionNote}</Text>
      </Container>
    )
  }
}
const Container = styled.div`
  padding: 1.5rem 1rem;
  margin: 0;
`
const Text = styled.p`
  font-size: 0.95rem;
  margin: 0.5rem 0;
`
