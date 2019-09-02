import React, { Component } from "react"
import { Card } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"
import Header from "./Header"
import SmoothMoves from "./SmoothMoves"
import Records from "./Records"
import Regrets from "./Regrets"
import WhatIf from "./WhatIf"
import GameNotes from "./GameNotes"
import { connect } from "react-redux"
import * as actions from "./../../redux/actions/insightsActions"
import InsightLoader from "./InsightLoader"
import Loader from "./../General/Loader"
import Charts from "./Charts"

class Insight extends Component {
  state = {
    id: "",
    insight: undefined,
    parsedInsight: undefined,
    parsedInsightCreatedFor: undefined,
    loading: false,
  }

  async componentDidMount() {
    const { leagueId, insights, path, matchup } = this.props
    await InsightLoader.parseUrl(path)
    try {
      await this.getMatchupData(insights[leagueId][matchup - 1])
    } catch (e) {}
  }

  async componentDidUpdate(prevProps) {
    const { path, insights, leagueId, matchup } = this.props
    const { parsedInsightCreatedFor, loading } = this.state

    if (path.location.search !== prevProps.path.location.search) {
      InsightLoader.parseUrl(path)
    }
    if (leagueId && !insights[leagueId] && !loading) {
      this.setState({ loading: true })
      await InsightLoader.load()
      this.setState({ loading: false })
    }
    if (insights[leagueId] && matchup) {
      try {
        await this.getMatchupData(insights[leagueId][matchup - 1])
      } catch (e) {}
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
      parsedInsightCreatedFor: `${this.props.leagueId}-${this.props.matchup}`,
    })
  }

  render() {
    const { insights, leagueId, matchup } = this.props
    const insight = insights[leagueId]
      ? insights[leagueId][matchup - 1]
      : undefined
    const { parsedInsight } = this.state
    if (this.state.loading) {
      return <Loader text="Loading Insight..." />
    }
    if (!insight || !parsedInsight) {
      return null
    }

    return (
      <Container>
        <Header data={insight} />
        <Records data={insight} />
        <SmoothMoves data={insight} parsedInsight={parsedInsight} />
        <Regrets data={insight} parsedInsight={parsedInsight} />
        <WhatIf data={insight} parsedInsight={parsedInsight} />
        <GameNotes data={insight} />
        <Charts data={insight} />
      </Container>
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

const Container = MUIStyled(Card)({
  margin: "1rem 0",
})
