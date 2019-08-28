import React, { PureComponent } from "react"
import { Link } from "gatsby"
import { Card, CardContent, CardActions, Button } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"
import styled from "styled-components"
export default class Matchup extends PureComponent {
  render() {
    const { data, leagueId } = this.props
    return (
      <Container>
        <CardContent>
          <TeamInfo>
            {/* <img src="" alt="home team logo" /> */}
            <span>{data.homeTeam.name} </span>
            <Record>
              ({data.homeTeam.wins}-{data.homeTeam.losses})
            </Record>
            <b>{data.homeTeam.score}</b>
          </TeamInfo>
          <TeamInfo>
            {/* <img src="" alt="away team logo" /> */}
            <span>{data.awayTeam.name}</span>
            <Record>
              ({data.awayTeam.wins}-{data.awayTeam.losses})
            </Record>
            <b>{data.awayTeam.score}</b>
          </TeamInfo>
        </CardContent>
        <CardActions>
          <StyledLink to={`/insight/?id=${leagueId}&matchup=${data.matchupId}`}>
            <Button variant="contained" color="primary">
              Matchup Insights
            </Button>
          </StyledLink>
        </CardActions>
      </Container>
    )
  }
}

const Container = MUIStyled(Card)({
  marginBottom: "1rem",
  justifyContent: "space-between",
  "& h4": {
    margin: "0 0 .6rem 0",
  },
})

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const TeamInfo = styled.div`
  display: flex;
  span {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`
const Record = styled.div`
  color: gray;
  margin-right: 0.5rem;
  flex: 1;
  white-space: nowrap;
`
