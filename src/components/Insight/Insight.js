import React, { Component } from "react"
import { getInsight } from "../../lib/AxiosHelper"
import Header from "./Header"
import SmoothMoves from "./SmoothMoves"
import Records from "./Records"
import Regrets from "./Regrets"
import WhatIf from "./WhatIf"
import GameNotes from "./GameNotes"

export default class League extends Component {
  state = {
    id: "",
    insight: undefined,
    parsedInsight: undefined,
  }

  parseUrl = url => {
    if (url) {
      const id = url.split("id=")[1].split("&")[0]
      const matchup = url.split("matchup=")[1]
      this.setState({ matchup, id })
      return { id, matchup }
    }
  }
  async componentDidMount() {
    const { id, matchup } = this.parseUrl(this.props.path.location.search)
    const insight = await getInsight(id, matchup)
    await this.getMatchupData(insight)
    this.setState({ insight })
  }

  componentWillReceiveProps(newProps) {
    if (this.props.path.location.search !== newProps.path.location.search) {
      this.parseUrl(newProps.path.location.search)
    }
  }

  async getMatchupData(data) {
    const winningTeam =
      data.homeTeam.score > data.awayTeam.score
        ? data.homeTeam.name
        : data.awayTeam.name
    const losingTeam =
      data.homeTeam.score > data.awayTeam.score
        ? data.awayTeam.name
        : data.homeTeam.name
    const winningRoster =
      data.homeTeam.score > data.awayTeam.score
        ? data.homeTeamRoster
        : data.awayTeamRoster
    const losingRoster =
      data.homeTeam.score > data.awayTeam.score
        ? data.awayTeamRoster
        : data.homeTeamRoster
    this.setState({
      ...this.state,
      parsedInsight: { winningTeam, losingTeam, winningRoster, losingRoster },
    })
  }

  render() {
    const { insight, parsedInsight } = this.state
    return (
      <div>
        <Header data={insight} />
        <Records data={insight} />
        <SmoothMoves data={insight} parsedInsight={parsedInsight} />
        <Regrets data={insight} parsedInsight={parsedInsight} />
        <WhatIf data={insight} parsedInsight={parsedInsight} />
        <GameNotes data={insight} />
      </div>
    )
  }
}
