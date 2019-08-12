import React, { Component } from "react";
import styled from "styled-components";

export default class GameNotes extends Component {
  render() {
    const { data } = this.props;
    if(!data){
      return <Container/>
    }
    return (
      <Container>
        <h2>Game Notes</h2>
        <Text>
          The {data.gameNotes.margin} point margin of victory for this matchup ended up being the{" "}
          {data.gameNotes.marginOfVictoryRank}th largest in the league this week.
        </Text>
      </Container>
    );
  }
}
const Container = styled.div`
  padding: 1.5rem 1rem;
  margin: 0;
`;
const Text = styled.p`
  padding-left: 1rem;
`;
