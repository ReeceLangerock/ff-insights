import React, { Component } from "react"
import styled from "styled-components"
import NLP from "./../../lib/NLP"
import {
  getWorstUnderperformingStarter,
  getNumUnderachievers,
} from "./../../lib/RegretHelper"

export default class Regrets extends Component {
  state = {}

  async componentWillReceiveProps(newProps) {
    console.log(newProps)
    if (this.props.parsedInsight !== newProps.parsedInsight) {
      this.generateText(newProps.parsedInsight)
    }
  }

  async generateText(parsedInsight) {
    const { losingRoster, losingTeam } = parsedInsight
    let data = {
      usedPlayers: [],
      texts: [],
    }

    data = getWorstUnderperformingStarter(losingRoster, data)
    data = getNumUnderachievers(losingRoster, losingTeam, data)

    this.setState({
      ...data.texts,
    })
  }

  render() {
    const { numUnderachieversText, underachievingStarterByPercent } = this.state
    const { parsedInsight } = this.props
    if (!parsedInsight) {
      return <Container />
    }
    return (
      <Container>
        <h2>{parsedInsight.losingTeam} Regret Tracker</h2>
        <Text>{numUnderachieversText || ""}</Text>
        <Text>{underachievingStarterByPercent || ""}</Text>
      </Container>
    )
  }

  async getWorstBenchDecision(players) {
    let highestRankedPlayer = players[0]
    let benchPlayers = players.filter(p => p.lineupPosition === "Bench")
    players.forEach(p => {
      if (
        p.lineupPosition !== "Bench" &&
        p.positionalPointsRank < highestRankedPlayer.positionalPointsRank
      ) {
        highestRankedPlayer = p
      }
    })

    const text = `With ${highestRankedPlayer.points} points, ${
      highestRankedPlayer.fullName
    } had the ${NLP.highLowHelper(
      highestRankedPlayer.positionalPointsRank
    )} score for a ${highestRankedPlayer.position} in the league this week.`

    const newUsedPlayers = [...this.state.usedPlayers, highestRankedPlayer.id]
    this.setState({
      highestRankedPlayerText: text,
      usedPlayers: newUsedPlayers,
    })
  }
}

const Container = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  margin: 0;
`

const Text = styled.p`
  padding-left: 1rem;
  font-size: 14px;
  margin: 0.5rem 0;
`
