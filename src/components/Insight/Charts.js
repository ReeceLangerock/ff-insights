import React from "react"
import PointsByPosition from "./Charts/PointsByPosition"
import PointsByPlayer from "./Charts/PointsByPlayer"
import styled from "styled-components"
export default class Charts extends React.Component {
  render() {
    const { data } = this.props
    return (
      <>
        <Container>
          <PointsByPosition data={data} />
          <PointsByPlayer data={data} />
        </Container>
        <TeamColors>
          <div style={{ marginRight: "1rem" }}>
            <div className="swatch red"></div>
            {data.homeTeam.name}
          </div>
          <div>
            <div className="swatch blue"></div>

            {data.awayTeam.name}
          </div>
        </TeamColors>
      </>
    )
  }
}
const Container = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

const TeamColors = styled.div`
  display: flex;
  border-radius: 3px;
  justify-content: center;
  margin: 4rem 0 1rem 0;
  div {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .swatch {
    display: inline-block;
    border-radius: 3px;
    height: 32px;
    width: 32px;
    margin-right: 0.5rem;
  }
  .blue {
    background: blue;
  }
  .red {
    background: red;
  }
`
