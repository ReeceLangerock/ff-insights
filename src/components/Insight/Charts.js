import React from "react"
import PointsByPosition from "./Charts/PointsByPosition"
import PointsByPlayer from './Charts/PointsByPlayer'
import styled from 'styled-components'
export default class Charts extends React.Component {

  render() {
    return (
      <Container>
        <PointsByPosition data={this.props.data} />
        <PointsByPlayer data={this.props.data} />

      </Container>
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