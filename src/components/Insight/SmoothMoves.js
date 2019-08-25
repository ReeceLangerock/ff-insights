import React, { Component } from "react"
import styled from "styled-components"
import NLP from "./../../lib/NLP"
import { getFullPositionText } from "./../../lib/positionalHelper"
export default class SmoothMoves extends Component {
  constructor(props) {
    super(props)

    this.state = {
      highestRankedPlayerText: "",
      highestPositionalPlayerText: [],
      overachieverByPercentText: "",
      numOverachieversText: "",
      overachieverByAmountText: "",
      usedPlayers: [],
    }
  }
  async componentDidMount() {
    const { parsedInsight } = this.props

    await this.gethighestRankedPlayerText(parsedInsight.winningRoster)
    await this.getOverAchieverByPercent(parsedInsight.winningRoster)
    await this.getOverAchieverByAmount(parsedInsight.winningRoster)
    await this.getHighestPositionalPlayerTexts(parsedInsight.winningRoster)
    await this.getNumOverachievers(
      parsedInsight.winningRoster,
      parsedInsight.winningTeam
    )
  }

  render() {
    const {
      highestRankedPlayerText,
      highestPositionalPlayerText,
      overachieverByPercentText,
      overachieverByAmountText,
      numOverachieversText,
    } = this.state
    const { parsedInsight } = this.props
    if (!parsedInsight) {
      return <Container />
    }
    return (
      <Container>
        <h2>{parsedInsight.winningTeam} Smooth Moves</h2>
        <Text>{highestRankedPlayerText}</Text>
        <Text>{overachieverByPercentText}</Text>
        <Text>{overachieverByAmountText}</Text>
        {highestPositionalPlayerText.map((text, index) => (
          <Text key={`positionalText-${index}`}>{text}</Text>
        ))}
        <Text>{numOverachieversText}</Text>
      </Container>
    )
  }

  async gethighestRankedPlayerText(players) {
    console.log("text")

    let highestRankedPlayer = players[0]
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
    )} score for a ${getFullPositionText(
      highestRankedPlayer.position
    )} in the league this week.`

    const newUsedPlayers = [...this.state.usedPlayers, highestRankedPlayer.id]
    console.log(text)
    this.setState({
      highestRankedPlayerText: text,
      usedPlayers: newUsedPlayers,
    })
  }

  async getOverAchieverByPercent(players) {
    let overachiever = players[0]

    players.forEach(p => {
      if (
        p.lineupPosition === "Bench" ||
        !p.points ||
        !p.projectedPoints ||
        this.state.usedPlayers.includes(p.id)
      ) {
      } else if (
        p.points / p.projectedPoints >
        overachiever.points / overachiever.projectedPoints
      ) {
        overachiever = p
      }
    })

    const projectionBeat = (
      (overachiever.points / overachiever.projectedPoints) *
      100
    ).toFixed(2)

    const text = `By scoring ${overachiever.points} points, ${overachiever.fullName} beat his projected ${overachiever.projectedPoints} points by ${projectionBeat}%.`

    const newUsedPlayers = [...this.state.usedPlayers, overachiever.id]
    this.setState({
      overachieverByPercentText: text,
      usedPlayers: newUsedPlayers,
    })
  }

  async getOverAchieverByAmount(players) {
    let overachiever = players[0]

    players.forEach(p => {
      if (
        p.lineupPosition === "Bench" ||
        !p.points ||
        !p.projectedPoints ||
        this.state.usedPlayers.includes(p.id)
      ) {
      } else if (
        p.points - p.projectedPoints >
        overachiever.points - overachiever.projectedPoints
      ) {
        overachiever = p
      }
    })
    const beat = (overachiever.points - overachiever.projectedPoints).toFixed(2)
    const text = `${overachiever.fullName} crushed his projected ${
      overachiever.projectedPoints
    } points by ${beat}, landing him at ${NLP.getOrdinal(
      overachiever.positionalPointsRank
    )} among ${overachiever.position} in the league.`

    const newUsedPlayers = [...this.state.usedPlayers, overachiever.id]
    this.setState({
      overachieverByAmountText: text,
      usedPlayers: newUsedPlayers,
    })
  }

  getNumOverachievers(players, winningTeam) {
    let overachievers = 0
    let rosterSize = 0

    players.forEach(p => {
      if (p.lineupPosition !== "Bench") {
        rosterSize++
      }

      if (p.lineupPosition === "Bench" || !p.points || !p.projectedPoints) {
      } else if (p.points >= p.projectedPoints) {
        overachievers++
      }
    })

    let overachieversText = ""
    if (rosterSize / overachievers >= 2) {
      overachieversText = `${winningTeam} saw only ${overachievers} of their ${rosterSize} starters beat their scoring projections`
    } else {
      overachieversText = `${winningTeam} overachieved this week, with ${overachievers} of their ${rosterSize} starters beating their scoring projections`
    }

    this.setState({ numOverachieversText: overachieversText })
  }

  async getHighestPositionalPlayerTexts(players) {
    let positonPlayers = []
    const positions = ["QB", "WR", "RB", "TE", "RB/WR/TE"]

    const filteredPlayers = []
    players.forEach(p => {
      if (!this.state.usedPlayers.includes(p.id)) {
        filteredPlayers.push(p)
      }
    })
    positions.forEach((position, index) => {
      filteredPlayers.forEach(p => {
        if (p.lineupPosition === position && !positonPlayers[index]) {
          positonPlayers[index] = p
        }
        if (p.lineupPosition !== position || !p.points || !p.projectedPoints) {
        } else if (
          p.positionalPointsRank < positonPlayers[index].positionalPointsRank
        ) {
          positonPlayers[index] = p
        }
      })
    })

    const texts = []

    positonPlayers.forEach(p => {
      if (p.positionalPointsRank <= 10) {
        const text = `With ${p.points} points scored, ${
          p.fullName
        } ranked ${NLP.getOrdinal(p.positionalPointsRank)} among all ${
          p.position
        } in the league this week.`
        texts.push(text)
      }
    })

    this.setState({ highestPositionalPlayerText: texts })
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
