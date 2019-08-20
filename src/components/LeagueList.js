import React, { Component } from "react"
import { Link } from "gatsby"
import { getLeagueList } from "./../lib/AxiosHelper"

import styled from "styled-components"

export default class LeagueList extends Component {
  state = {
    leagues: [],
  }
  async componentDidMount() {
    const response = await getLeagueList()
    this.setState({ leagues: response.leagues })
  }
  renderLeagues() {
    return this.state.leagues.map(league => {
      return (
        <LeagueItem to={`/league/?id=${league.leagueId}`} key={league.leagueId}>
          <div>{league.leagueName}</div>
          <div>{league.leagueId}</div>
        </LeagueItem>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Leagues</h1>
        <div>{this.renderLeagues()} </div>
      </div>
    )
  }
}

const LeagueItem = styled(Link)`
  display: flex;
  border: 1px solid gray;
  padding: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  text-decoration: none;
  justify-content: space-between;
`
