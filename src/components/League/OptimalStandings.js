import React, { Component } from "react"
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"

export default class OptimalStandings extends Component {
  state = { optimalRankings: [] }
  componentDidMount() {
    this.parseOptimalData()
  }

  parseOptimalData() {
    const { insights } = this.props
    let parsed = []
    insights.forEach(matchup => {
      const home = {
        name: matchup.homeTeam.name,
        optimalScore: matchup.homeOptimalData.optimalScore,
        actualScore: matchup.homeOptimalData.actualScore,
        optimizationRate: matchup.homeOptimalData.optimizationRate,
      }
      const away = {
        name: matchup.awayTeam.name,
        optimalScore: matchup.awayOptimalData.optimalScore,
        actualScore: matchup.awayOptimalData.actualScore,
        optimizationRate: matchup.awayOptimalData.optimizationRate,
      }

      parsed.push(home, away)
    })

    parsed = parsed.sort((a, b) => b.optimalScore - a.optimalScore)

    this.setState({ optimalRankings: parsed })
  }

  renderOptimalRanks() {
    return this.state.optimalRankings.map(row => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.optimalScore.toFixed(2)}</TableCell>
        <TableCell align="right">{row.actualScore.toFixed(2)}</TableCell>
        <TableCell align="right">
          {(row.optimizationRate * 100).toFixed(2)}%
        </TableCell>
      </TableRow>
    ))
  }
  render() {
    return (
      <div>
        <h1>Best Ball</h1>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team Name</TableCell>
                <TableCell align="right">Optimal Score</TableCell>
                <TableCell align="right">Actual Score</TableCell>
                <TableCell align="right">% of Optimal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderOptimalRanks()}</TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
