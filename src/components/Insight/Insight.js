import React, { Component } from "react"
import { getInsights } from "../../lib/AxiosHelper"
import Header from "./Header"
import SmoothMoves from "./SmoothMoves"
import Records from "./Records"
import Regrets from "./Regrets"
import WhatIf from "./WhatIf"
import GameNotes from "./GameNotes"
import { connect } from "react-redux"
import * as actions from "./../../redux/actions/insightsActions"
import InsightLoader from "./InsightLoader"

class Insight extends Component {
  state = {
    id: "",
    insight: undefined,
    parsedInsight: undefined,
  }

  async componentDidMount() {
    const { leagueId, insights, path, matchup } = this.props
    if (!leagueId || !insights[leagueId] || !matchup) {
      InsightLoader.load(path)
    } else {
      await this.getMatchupData(insights[leagueId][matchup])
    }
  }

  async componentDidUpdate(prevProps) {
    const { path, insights, leagueId, matchup } = this.props
    if (path.location.search !== prevProps.path.location.search) {
      this.parseUrl(path.location.search)
    }
    if (insights[leagueId] !== prevProps.insights[leagueId]) {
      await this.getMatchupData(insights[leagueId][matchup])
    }
  }

  async getMatchupData(data) {
    if (!data) {
      return
    }
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
    const { insights, leagueId, matchup } = this.props
    const insight = insights[leagueId] ? insights[leagueId][matchup] : undefined
    const { parsedInsight } = this.state
    if (!insight || !parsedInsight) {
      return null
    }
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
const mapStateToProps = state => ({
  insights: state.insightsReducer.insights,
  leagueId: state.insightsReducer.leagueId,
  matchup: state.insightsReducer.matchup,
})

export default connect(
  mapStateToProps,
  actions
)(Insight)
