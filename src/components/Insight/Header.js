import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"

class Header extends Component {
  render() {
    const { insights, leagueId } = this.props
    if (!insights) {
      return <Container/>
    }
    return (
      <>
        <Container>
          Week {insights[leagueId].week}{" "}
          <Link to={`/league/?id=${leagueId}`}>Back to league</Link>
        </Container>

        <Title>{this.renderHeaderText()}</Title>
      </>
    )
  }

  renderHeaderText() {
    const { data } = this.props
    if (!data.homeTeam || !data.awayTeam) {
      return null
    }
    const tie = data.homeTeam.score === data.awayTeam.score
    const homeWin = data.homeTeam.score > data.awayTeam.score

    if (homeWin) {
      return `${data.homeTeam.name} defeats ${data.awayTeam.name}`
    } else if (tie) {
      return `${data.homeTeam.name} ties ${data.awayTeam.name}`
    } else {
      return `${data.awayTeam.name} upsets ${data.homeTeam.name}`
    }
  }
}

const mapStateToProps = state => ({
  insights: state.insightsReducer.insights,
  leagueId: state.insightsReducer.leagueId,
})

export default connect(
  mapStateToProps,
  null
)(Header)

const Container = styled.div`
  font-size: 1.1rem;
  text-align: left;
  border-bottom: 1px solid gray;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding: 1.5rem 1rem;
  margin: 0;
`

