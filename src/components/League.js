import React, { Component } from "react"
import { Link } from "gatsby"
import { getInsights } from "./../lib/AxiosHelper"
import styled from "styled-components"

export default class League extends Component {
  state = {
    id: "",
    insights: [],
  }

  parseUrl = url => {
    if (url) {
      const id = url.split("id=")[1].split("&")[0]
      this.setState({ id })
      return id
    }
  }
  async componentDidMount() {
    const id = this.parseUrl(this.props.path.location.search)
    const insights = await getInsights(id)
    this.setState({ insights })
  }

  componentWillReceiveProps(newProps) {
    if (this.props.path.location.search !== newProps.path.location.search) {
      this.parseUrl(newProps.path.location.search)
    }
  }

  renderInsights() {
    const { insights, id } = this.state
    return insights.map(insight => {
      return (
        <Matchup
          key={insight.matchupId}
          to={`/insight/?id=${id}&matchup=${insight.matchupId}`}
        >
          {insight.homeTeam.name} vs {insight.awayTeam.name}
        </Matchup>
      )
    })
  }

  render() {
    return (
      <div>
        <Link to="/league/?id=666&matchup=2">{}</Link>
        {this.renderInsights()}
      </div>
    )
  }
}

const Matchup = styled(Link)`
  display: flex;
  border: 1px solid gray;
  padding: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  text-decoration: none;
  justify-content: space-between;
`
