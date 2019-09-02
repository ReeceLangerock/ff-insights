import React from "react"
import { getPointsByNflPosition } from "./../../../lib/chartDataHelper"
import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryLabel,
  VictoryContainer,
} from "victory"

export default class PointsByPosition extends React.Component {
  state = {}
  async componentDidMount() {
    this.generateText()
  }

  async generateText() {
    const data = await getPointsByNflPosition(this.props.data)
    this.setState({
      data,
    })
  }

  renderBars() {
    const { data } = this.state
    return Object.keys(data).map(p => {
      const position = data[p]
      return (
        <VictoryBar
          key={`${p}-chart`}
          data={[
            { x: "QB", y: position.QB },
            { x: "RB", y: position.RB },
            { x: "WR", y: position.WR },
            { x: "TE", y: position.TE },
            { x: "D/ST", y: position["D/ST"] },
            { x: "K", y: position.K },
          ]}
        />
      )
    })
  }

  render() {
    if (this.state.data) {
      return (
        <VictoryChart
          containerComponent={
            <VictoryContainer style={{ touchAction: "auto" }} />
          }
        >
          <VictoryLabel
            text="Points by Position"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryGroup offset={20} colorScale={["red", "blue"]}>
            {this.renderBars()}
          </VictoryGroup>
        </VictoryChart>
      )
    } else {
      return null
    }
  }
}
