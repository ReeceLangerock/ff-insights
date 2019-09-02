import React, { PureComponent } from "react"
import { Card } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"
import styled from "styled-components"
export default class LeagueInsights extends PureComponent {
  renderTopPlayers(type) {
    const { topBench, topStarters } = this.props
    const players = type === "starters" ? topStarters : topBench
    return Object.keys(players).map(position => {
      const player = players[position]
      if (player) {
        const overAchiever =
          player.points >= player.projectedPoints
            ? "overachiever"
            : "underachiever"
        return (
          <Player key={player.id}>
            <h4>{player.fullName}</h4>
            <div className="points">{player.points.toFixed(2)}</div>
            <div className={`${overAchiever} percentage`}>
              {((player.points / player.projectedPoints) * 100).toFixed(1)}%
            </div>
            <div className="team">{player.team}</div>
          </Player>
        )
      }
    })
  }
  render() {
    if (this.props.topStarters) {
      return (
        <div>
          <h1>Top Players</h1>

          <PlayerContainer>{this.renderTopPlayers("starters")}</PlayerContainer>
          <h1>Top Players Left on the Bench</h1>

          <PlayerContainer>{this.renderTopPlayers("bench")}</PlayerContainer>
        </div>
      )
    } else {
      return null
    }
  }
}

const Player = MUIStyled(Card)({
  marginBottom: "1rem",
  padding: "0.5rem 0.35rem",
  textAlign: "center",
  "& h4": {
    margin: "0 0 .5rem 0",
  },
  "& .points": {
    fontSize: "1.5rem",
    marginBottom: "0.25rem",
    fontWeight: "bold",
  },

  "& .team": {
    fontSize: ".8rem",
  },
  "& .percentage": {
    fontSize: ".9rem",
    fontWeight: "bold",
  },
  "& .overachiever": {
    color: "green",
  },
  "& .underachiever": {
    color: "red",
  },
})

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 10px;
`
