import React, { Component } from "react";
import styled from "styled-components";
import WhatIfHelper from './../../lib/WhatIfHelper'

export default class WhatIf extends Component {
  render() {
    const { data, parsedInsight } = this.props;
    if(!data){
      return <Container/>
    }
    const { whatIf } = this.props.data;
    let numBeaten;
    let numLostTo;
    let pointsNeededToBeatAll;
    let pointsNeededToLoseToAll;
    if (data.homeTeam.score > data.awayTeam.score) {
      numBeaten = whatIf.homeBeatableTeams;
      numLostTo = whatIf.awayTeamsLostTo;
      pointsNeededToBeatAll = whatIf.homePointsNeededToBeatAll;
      pointsNeededToLoseToAll = whatIf.homePointsNeededToLoseToAll;
    } else if (data.awayTeam.score > data.homeTeam.score) {
      numBeaten = whatIf.awayBeatableTeams;
      numLostTo = whatIf.homeTeamsLostTo;
      pointsNeededToBeatAll = whatIf.awayPointsNeededToBeatAll;
      pointsNeededToLoseToAll = whatIf.homePointsNeededToLoseToAll;
    } else {
    }
    return (
      <Container>
        <h2>What If</h2>

        <Text>
          {WhatIfHelper.generateOtherTeamsBeatenText(
            parsedInsight.winningTeam,
            parsedInsight.losingTeam,
            numBeaten
          )}
        </Text>
        <Text>
          {WhatIfHelper.generatePointsNeededToBeatAllText(
            parsedInsight.winningTeam,
            pointsNeededToBeatAll
          )}
        </Text>
        <Text>
          {WhatIfHelper.generateOtherTeamsLostToText(
            parsedInsight.winningTeam,
            parsedInsight.losingTeam,
            numLostTo
          )}
        </Text>
        <Text>
          {WhatIfHelper.generatePointsNeededToLoseToAllText(
            parsedInsight.losingTeam,
            pointsNeededToLoseToAll
          )}
        </Text>
      </Container>
    );
  }
}
const Container = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  margin: 0;
`;
const Text = styled.p`
  padding-left: 1rem;
  font-size: 14px;
  margin: 0.5rem 0;
`;
