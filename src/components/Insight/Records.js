import React, { Component } from "react";
import styled from "styled-components";

export default class Records extends Component {
  render() {
    if (!this.props.data) {
      return <Container/>
    }
    const { homeTeam, awayTeam } = this.props.data;
    return (
      <Container>
        <TeamInfo>
          <img src="" />
          <span>{homeTeam.name} </span>
          <Record>
            ({homeTeam.wins}-{homeTeam.losses})
          </Record>
          <b>{homeTeam.score}</b>
        </TeamInfo>
        <TeamInfo>
          <span>{awayTeam.name}</span>
          <Record>
            ({awayTeam.wins}-{awayTeam.losses})
          </Record>
          <b>{awayTeam.score}</b>
        </TeamInfo>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.1rem;
`;

const TeamInfo = styled.div`
  display: flex;
  span {
    margin-right: 0.5rem;
  }
`;
const Record = styled.div`
  color: gray;
  margin-right: 0.5rem;
`;
