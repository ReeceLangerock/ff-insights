import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import {ArrowBack} from '@material-ui/icons';

class Header extends Component {
  render() {
    const { insights, leagueId } = this.props
    if (!insights) {
      return <Container />
    }
    return (
      <>
        <Container>
          Week {insights[leagueId].week}{" "}
          <StyledLink to={`/league/?id=${leagueId}`}>
            <Button variant="contained" color="primary">
              <ArrowBack style={{marginRight: '.5rem'}}/>
              Back to League
            </Button>
          </StyledLink>
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
  font-size: 1.2rem;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12); 
  padding: 1.5rem 1rem;
  margin: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
