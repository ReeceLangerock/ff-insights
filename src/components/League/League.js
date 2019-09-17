import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import * as actions from "../../redux/actions/insightsActions"
import InsightLoader from "../Insight/InsightLoader"
import Matchup from "./Matchup"
import Loader from "./../General/Loader"
import LeagueInsights from "./LeagueInsights"
import Sharing from "../General/Sharing"
import { Helmet } from "react-helmet"
import ReactGA from "react-ga"

class League extends React.Component {
  state = {
    id: "",
    insights: [],
    loading: false,
  }
  async componentDidMount() {
    const { path, insights } = this.props
    const { id } = await InsightLoader.parseUrl(path)
    ReactGA.initialize("UA-148167774-1",{siteSpeedSampleRate: 100})
    ReactGA.pageview(window.location.pathname + window.location.search)

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
    const {
      insights,
      leagueId,
      topStarters,
      topBench,
      leagueName,
      week,
    } = this.props
    if (this.state.loading) {
      return <Loader text="Loading Matchups..." />
    }
    if (insights[leagueId] && insights[leagueId].status === "not available") {
      return (
        <div>
          <h3>No insights are available for this league at this time.</h3>
          <p> Please check back later.</p>
        </div>
      )
    }
    return (
      <div>
        {/* THIS CAN BE REMOVED FOR WEEK 2!!! */}
        {leagueName && week && (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{`${leagueName} - Week ${week}`}</title>
              <link
                rel="canonical"
                href={`https://insightful.tk/league/?id=${leagueId}`}
              />
            </Helmet>
            <Header>
              <h1>
                {leagueName} - Week {week}
              </h1>
            </Header>
          </>
        )}
        <h2>Matchups</h2>
        <MatchupContainer>{this.renderInsights()}</MatchupContainer>

        <LeagueInsights
          topBench={topBench}
          topStarters={topStarters}
        ></LeagueInsights>

        {/* THIS CAN BE REMOVED FOR WEEK 2!!! */}
        {leagueName && week && (
          <Sharing data={{ insights, leagueName, week, leagueId }} />
        )}
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
  leagueName: state.insightsReducer.leagueNames[state.insightsReducer.leagueId],
  week: state.insightsReducer.week,
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
