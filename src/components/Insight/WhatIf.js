import React, { Component } from "react"
import styled from "styled-components"
import WhatIfHelper from "./../../lib/WhatIfHelper"

export default class WhatIf extends Component {
  state = {}

  async componentDidMount() {
    this.generateText()
  }

  async generateText() {
    const { data, parsedInsight } = this.props
    const { whatIf } = this.props.data
    let texts = {}
    let numBeaten
    let numLostTo
    let pointsNeededToBeatAll
    let pointsNeededToLoseToAll
    if (data.homeTeam.score > data.awayTeam.score) {
      numBeaten = whatIf.homeBeatableTeams
      numLostTo = whatIf.awayTeamsLostTo
      pointsNeededToBeatAll = whatIf.homePointsNeededToBeatAll
      pointsNeededToLoseToAll = whatIf.homePointsNeededToLoseToAll
    } else if (data.awayTeam.score > data.homeTeam.score) {
      numBeaten = whatIf.awayBeatableTeams
      numLostTo = whatIf.homeTeamsLostTo
      pointsNeededToBeatAll = whatIf.awayPointsNeededToBeatAll
      pointsNeededToLoseToAll = whatIf.homePointsNeededToLoseToAll
    } else {
    }
    texts.otherTeamsBeaten = WhatIfHelper.generateOtherTeamsBeatenText(
      parsedInsight.winningTeam,
      parsedInsight.losingTeam,
      numBeaten
    )
    texts.pointsNeededToBeatAll = WhatIfHelper.generatePointsNeededToBeatAllText(
      parsedInsight.winningTeam,
      pointsNeededToBeatAll
    )
    texts.otherTeamsLostTo = WhatIfHelper.generateOtherTeamsLostToText(
      parsedInsight.winningTeam,
      parsedInsight.losingTeam,
      numLostTo
    )
    texts.pointsNeededToLoseToAll = WhatIfHelper.generatePointsNeededToLoseToAllText(
      parsedInsight.losingTeam,
      pointsNeededToLoseToAll
    )

    this.setState({
      ...texts,
    })
  }
  render() {
    const { data } = this.props
    const {
      otherTeamsBeaten,
      pointsNeededToBeatAll,
      otherTeamsLostTo,
      pointsNeededToLoseToAll,
    } = this.state
    if (!data) {
      return <Container />
    }

    return (
      <Container>
        <h2>What If</h2>
        <Text>{otherTeamsBeaten}</Text>
        <Text>{pointsNeededToBeatAll}</Text>
        <Text>{otherTeamsLostTo}</Text>
        <Text>{pointsNeededToLoseToAll}</Text>
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
