import React, { Component } from "react"
import { Card, Button } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"
import styled from "styled-components"

export default class Sharing extends Component {
  state = {}
  componentDidMount() {
    this.createBBCode()
  }

  createBBCode() {
    const { data } = this.props
    if (data.leagueId && data.leagueName) {
      let bbString = `[b][size=20]${data.leagueName}[/size][/b]\n\n`

      data.insights[data.leagueId].forEach(insight => {
        const url = `https://insightful.tk/insight/?id=${data.leagueId}&matchup=${insight.matchupId}`
        bbString += `[url=${url}]${insight.awayTeam.name} vs. ${insight.homeTeam.name}[/url]\n`
      })
      console.log(bbString)
      this.setState({ bbcode: bbString })
    }
  }
  render() {
    return (
      <>
        <h2 style={{ marginTop: "3rem" }}>Share your League Insights</h2>

        <Container>
          <Share>
            <h3>BBCode</h3>
            <p>
              Copy this into your League Manager's Note on your{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://fantasy.espn.com/football/league?leagueId=${this.props.data.leagueId}`}
              >
                league home page
              </a>
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigator.clipboard.writeText(this.state.bbcode)
              }}
            >
              Copy To Clipboard
            </Button>
          </Share>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

const Share = MUIStyled(Card)({
  marginBottom: "1rem",
  padding: "0.5rem 0.35rem",
  textAlign: "center",
  "& h3": {
    margin: "0 0 .5rem 0",
  },
  "& a": {
    color: "var(--primary-color)",
    textDecoration: "none",
    fontWeight: "bold",
  },
})
