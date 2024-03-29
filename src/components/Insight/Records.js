import React, { Component } from "react"
import styled from "styled-components"

export default class Records extends Component {
  render() {
    if (!this.props.data) {
      return <Container />
    }
    const { homeTeam, awayTeam } = this.props.data
    return (
      <Container>
        <TeamInfo>
          {homeTeam.logoURL && (
            <Logo src={homeTeam.logoURL} alt="home team logo" />
          )}
          <span>{homeTeam.name} </span>
          <Record>
            ({homeTeam.wins}-{homeTeam.losses})
          </Record>
          <b>{homeTeam.score}</b>
        </TeamInfo>
        <TeamInfo>
          {awayTeam.logoURL && (
            <Logo src={awayTeam.logoURL} alt="Away Team Logo" />
          )}
          <span>{awayTeam.name}</span>
          <Record>
            ({awayTeam.wins}-{awayTeam.losses})
          </Record>
          <b>{awayTeam.score}</b>
        </TeamInfo>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 1.5rem 1rem;
  font-size: 1.1rem;
  flex-wrap: wrap;
`

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
  span {
    margin-right: 0.5rem;
  }
`
const Record = styled.div`
  color: gray;
  margin-right: 0.5rem;
`
const Logo = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: #f7f7f7;
  text-align: center;
  margin-right: .5rem;
`
