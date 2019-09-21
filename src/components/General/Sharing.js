import React, { Component } from "react"
import { Card, Button } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"
import styled from "styled-components"
import Dialog from "./Dialog"

export default class Sharing extends Component {
  state = {}
  componentDidMount() {
    this.createBBCode()
    this.createTweetLink()
  }

  createBBCode() {
    const { data } = this.props
    if (data.leagueId && data.leagueName) {
      let bbString = `[b][size=20]${data.leagueName}[/size][/b]\n\n`

      data.insights[data.leagueId].forEach(insight => {
        const url = `https://insightful.tk/insight/?id=${data.leagueId}&matchup=${insight.matchupId}`
        bbString += `[url=${url}]${insight.awayTeam.name} vs. ${insight.homeTeam.name}[/url]\n`
      })
      this.setState({ bbcode: bbString })
    }
  }

  createTweetLink() {
    const { data } = this.props
    const base = `https://twitter.com/intent/tweet?text=`
    const text =
      `Check out week ${data.week} insights for ${data.leagueName}, only on Insightful.` +
      `\nhttps://insightful.tk/insight/?id=${data.leagueId}`
    const link = encodeURI(base + text)
    this.setState({ twitterLink: link })
  }

  render() {
    const { data } = this.props
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
                href={`https://fantasy.espn.com/football/league?leagueId=${data.leagueId}`}
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
          <Share>
            <h3>Social Media</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.twitterLink}
            >
              <Image
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </Image>
            </a>
          </Share>
          <Share>
            <h3>Get Updates</h3>
            <p>
              Email me new insights for <br />
              <i>{data.leagueName}</i>
            </p>
            <Dialog
              leagueName={data.leagueName}
              leagueId={data.leagueId}
            ></Dialog>
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
  padding: "0.5rem",
  textAlign: "center",
  lineHeight: "1.25",
  "& h3": {
    margin: "0 0 .5rem 0",
  },
  "& a": {
    color: "var(--primary-color)",
    textDecoration: "none",
    fontWeight: "bold",
  },
})

const Image = styled.svg`
  height: 45px;
  fill: var(--primary-color);
  margin-top: 1rem;
`
