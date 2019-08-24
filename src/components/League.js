import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { connect } from "react-redux"
import * as actions from "./../redux/actions/insightsActions"
import InsightLoader from "./Insight/InsightLoader"

class League extends React.Component {
  state = {
    id: "",
    insights: [],
  }
  componentDidMount() {
    const { leagueId, insights, path } = this.props
    InsightLoader.parseUrl(path)
    if (!leagueId || !insights[leagueId]) {
      InsightLoader.load()
    }
  }

  componentDidUpdate(prevProps) {
    const { path, matchup, leagueId, insights } = this.props
    if (
      path.location.search !== prevProps.path.location.search ||
      matchup !== prevProps.matchup ||
      leagueId !== prevProps.leagueId
    ) {
      InsightLoader.parseUrl(path)
    }
    if (leagueId && !insights[leagueId]) {
      InsightLoader.load()
    }
  }

  renderInsights() {
    const { insights, leagueId } = this.props
    return (insights[leagueId] || []).map(insight => {
      return (
        <Matchup
          key={insight.matchupId}
          to={`/insight/?id=${leagueId}&matchup=${insight.matchupId}`}
          matchupid={insight.matchupId}
        >
          {insight.homeTeam.name} vs {insight.awayTeam.name}
        </Matchup>
      )
    })
  }

  render() {
    return (
      <div>
        <Link to="/league/?id=666&matchup=2">{}</Link>
        {this.renderInsights()}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  insights: state.insightsReducer.insights,
  leagueId: state.insightsReducer.leagueId,
})

export default connect(
  mapStateToProps,
  actions
)(League)

const Matchup = styled(Link)`
  display: flex;
  border: 1px solid gray;
  padding: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  text-decoration: none;
  justify-content: space-between;
`
