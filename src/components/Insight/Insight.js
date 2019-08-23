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

class Insight extends Component {
  state = {
    id: "",
    insight: undefined,
    parsedInsight: undefined,
  }

  parseUrl = url => {
    if (url) {
      const id = url.split("id=")[1].split("&")[0]
      const matchup = url.split("matchup=")[1]
      this.props.setLeagueId(id)
      this.props.setMatchup(matchup)
      return { id, matchup }
    }
  }
  async componentDidMount() {
    const { id, matchup } = this.parseUrl(this.props.path.location.search)
    if (!this.props.insights[id]) {
      const insights = await getInsights(id)
      this.props.addInsight(insights, id)
    } else {
      await this.getMatchupData(this.props.insights[id][matchup])
    }
  }
  // async componentDidMount() {
  //   if (!this.props.data) {
  //     const { id, matchup } = this.parseUrl(this.props.path.location.search)
  //     const insight = await getInsight(id, matchup)
  //     this.setState({ insight })
  //   }
  // }

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

    console.log()
    this.setState({
      ...this.state,
      parsedInsight: { winningTeam, losingTeam, winningRoster, losingRoster },
    })
  }

  render() {
    const { insights, leagueId, matchup } = this.props
    const insight = insights[leagueId] ? insights[leagueId][matchup] : undefined
    const { parsedInsight } = this.state
    console.log(insight)
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
