import React, { Component } from "react"
import styled from "styled-components"
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"

export default class OptimalLineups extends Component {
  state = { lineups: [] }
  lineupOrder = [
    "QB",
    "RB",
    "WR",
    "TE",
    "OP",
    "RB/WR/TE",
    "WR/TE",
    "RB/WR",
    "D/ST",
    "K",
  ]
  componentDidMount() {
    this.getLineupData()
  }
  getLineupData() {
    const {
      homeOptimalData,
      awayOptimalData,
      homeTeamRoster,
      awayTeamRoster,
    } = this.props.data
    const data = {}
    this.lineupOrder.forEach(pos => {
      if (homeOptimalData.lineup[pos] && awayOptimalData.lineup[pos]) {
        data[pos] = {
          pos,
          homeOptimal: homeOptimalData.lineup[pos],
          awayOptimal: awayOptimalData.lineup[pos],
          homeStarters: [],
          awayStarters: [],
        }

        homeTeamRoster.forEach(p => {
          if (p.lineupPosition === pos) {
            data[pos].homeStarters.push(p)
          }
        })
        awayTeamRoster.forEach(p => {
          if (p.lineupPosition === pos) {
            data[pos].awayStarters.push(p)
          }
        })
      }
    })

    this.setState({
      lineups: data,
    })
  }

  renderOptimalLineup(team) {
    const { lineups } = this.state
    return Object.keys(lineups).map(p => {
      const pos = lineups[p]
      const table = []
      for (let i = 0; i < pos.homeOptimal.length; i++) {
        table.push(
          <TableRow key={`${p}-${i}`}>
            <TableCell component="th" scope="row">
              {p}
            </TableCell>
            <TableCell align="left">
              {pos[`${team}Optimal`][i].fullName}
            </TableCell>
            <TableCell align="left">
              {pos[`${team}Optimal`][i].points.toFixed(2)}
            </TableCell>
            <TableCell align="left">
              {pos[`${team}Starters`][i].fullName}
            </TableCell>
            <TableCell align="left">
              {pos[`${team}Starters`][i].points.toFixed(2)}
            </TableCell>
          </TableRow>
        )
      }
      return table
    })
  }
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <Container>
        <h1>Optimal Lineups</h1>
        <h3>{data.homeTeam.name}</h3>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Optimal Starter</TableCell>
                <TableCell align="left">Points</TableCell>
                <TableCell align="left">Actual Starter</TableCell>
                <TableCell align="left">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderOptimalLineup("home")}</TableBody>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell>
                {data.homeOptimalData.optimalScore.toFixed(2)}
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                {data.homeOptimalData.actualScore.toFixed(2)}
              </TableCell>
            </TableRow>
          </Table>
        </Paper>
        <h3>{this.props.data.awayTeam.name}</h3>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Optimal Starter</TableCell>
                <TableCell align="left">Points</TableCell>
                <TableCell align="left">Actual Starter</TableCell>
                <TableCell align="left">Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderOptimalLineup("away")}</TableBody>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell align="left">
                {data.awayOptimalData.optimalScore.toFixed(2)}
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="left">
                {data.awayOptimalData.actualScore.toFixed(2)}
              </TableCell>
            </TableRow>
          </Table>
        </Paper>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-top: 1.5rem;

  h3 {
    margin-top: 2.5rem;
  }
`
