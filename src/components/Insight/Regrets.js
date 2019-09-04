import React, { Component } from "react"
import styled from "styled-components"
import {
  getWorstUnderperformingStarter,
  getNumUnderachievers,
  getWorstBenchDecision,
} from "./../../lib/RegretHelper"

export default class Regrets extends Component {
  state = {}

  async componentDidMount() {
    this.generateText(this.props.parsedInsight)
  }

  async generateText(parsedInsight) {
    const { losingRoster, losingTeam } = parsedInsight
    let data = {
      usedPlayers: [],
      texts: [],
    }

    data = getWorstUnderperformingStarter(losingRoster, data)
    data = getNumUnderachievers(losingRoster, losingTeam, data)
    data = await getWorstBenchDecision(losingRoster, data)
    this.setState({
      ...data.texts,
    })
  }

  render() {
    const {
      numUnderachieversText,
      shouldHaveStartedTE,
      shouldHaveStartedQB,
      underachievingStarterByPercent,
      shouldHaveStartedRB,
      shouldHaveStartedWR,
    } = this.state
    const { parsedInsight } = this.props
    if (!parsedInsight) {
      return <Container />
    }
    return (
      <Container>
        <h2>{parsedInsight.losingTeam} Regret Tracker</h2>
        <Text>{numUnderachieversText || ""}</Text>
        <Text>{underachievingStarterByPercent || ""}</Text>
        <Text>{shouldHaveStartedQB || ""}</Text>
        <Text>{shouldHaveStartedRB || ""}</Text>
        <Text>{shouldHaveStartedWR || ""}</Text>
        <Text>{shouldHaveStartedTE || ""}</Text>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  margin: 0;
`

const Text = styled.p`
  font-size: 0.95rem;
  margin: 0.5rem 0;
`
