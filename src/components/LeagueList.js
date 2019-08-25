import React, { Component } from "react"
import { Link } from "gatsby"
import { getLeagueList } from "./../lib/AxiosHelper"
import { styled as MUIStyled } from "@material-ui/styles"
import { Card, Button } from "@material-ui/core"
import styled from "styled-components"
import { connect } from "react-redux"
import * as actions from "./../redux/actions/leagueActions"

class LeagueList extends Component {
  state = {
    leagues: [],
  }
  async componentDidMount() {
    if (!this.props.leagues.length) {
      const response = await getLeagueList()
      this.props.saveLeagues(response.leagues)
    }
  }
  renderLeagues() {
    return (this.props.leagues || []).map(league => {
      return (
        <LeagueItem key={league.leagueId}>
          {league.logo && <img></img>}
          <div>
            <h4>League Name</h4>
            <span>{league.leagueName}</span>
          </div>
          <div>
            <h4>League Id</h4>
            <span>{league.leagueId}</span>
          </div>

          <StyledLink to={`/league/?id=${league.leagueId}`}>
            <Button variant="contained" color="primary">
              Go to league
            </Button>
          </StyledLink>
        </LeagueItem>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Recently Added Leagues</h1>
        <div>{this.renderLeagues()} </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leagues: state.leagueReducer.leagues,
})

export default connect(
  mapStateToProps,
  actions
)(LeagueList)

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const LeagueItem = MUIStyled(Card)({
  padding: "2rem 1.5rem",
  marginBottom: "1rem",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  "& h4": {
    margin: "0 0 .6rem 0",
  },
  "& div": {
    flex: 1,

    marginRight: "1rem",
  },
})
