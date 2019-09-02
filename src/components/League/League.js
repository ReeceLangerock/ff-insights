import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as actions from "../../redux/actions/insightsActions"
import InsightLoader from "../Insight/InsightLoader"
import Matchup from "./Matchup"
import Loader from "./../General/Loader"
import LeagueInsights from "./LeagueInsights"

class League extends React.Component {
  state = {
    id: "",
    insights: [],
    loading: false,
  }
  async componentDidMount() {
    const { path, insights } = this.props
    const { id } = await InsightLoader.parseUrl(path)
    if (id && !insights[id]) {
      this.setState({ loading: true })
      await InsightLoader.load()
      this.setState({ loading: false })
    }
  }

  async componentDidUpdate(prevProps) {
    const { path, matchup, leagueId } = this.props
    if (
      path.location.search !== prevProps.path.location.search ||
      matchup !== prevProps.matchup ||
      leagueId !== prevProps.leagueId
    ) {
      InsightLoader.parseUrl(path)
    }
  }

  renderInsights() {
    const { insights, leagueId } = this.props
    if (insights[leagueId] && insights[leagueId].status === "not available") {
      return <div> No Insights Availble </div>
    }
    return (insights[leagueId] || []).map(insight => {
      return (
        <Matchup
          key={insight.matchupId}
          data={insight}
          leagueId={leagueId}
        ></Matchup>
      )
    })
  }

  render() {
    const { topStarters, topBench } = this.props
    if (this.state.loading) {
      return <Loader text="Loading Matchups..." />
    }
    return (
      <div>
        <h1>Matchups</h1>
        <MatchupContainer>{this.renderInsights()}</MatchupContainer>

        <LeagueInsights
          topBench={topBench}
          topStarters={topStarters}
        ></LeagueInsights>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  insights: state.insightsReducer.insights,
  leagueId: state.insightsReducer.leagueId,
  topStarters:
    state.insightsReducer.topStarters[state.insightsReducer.leagueId],
  topBench: state.insightsReducer.topBench[state.insightsReducer.leagueId],
})

export default connect(
  mapStateToProps,
  actions
)(League)

const MatchupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`
