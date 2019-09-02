import React from "react"
import { getTopPlayers } from "./../../../lib/chartDataHelper"

import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryPortal,
  VictoryContainer,
} from "victory"

export default class PointsByPlayer extends React.Component {
  state = {}
  async componentDidMount() {
    this.generateText()
  }

  async generateText() {
    let data = {
      usedPlayers: [],
      texts: [],
    }

    data = await getTopPlayers(this.props.data)
    this.setState({
      data,
    })
  }

  renderBars() {
    return []
  }

  render() {
    const { data } = this.state
    if (this.state.data) {
      return (
        <VictoryChart
          domainPadding={[5, 5]}
          containerComponent={
            <VictoryContainer style={{ touchAction: "auto" }} />
          }
        >
          <VictoryLabel
            text="Top Scoring Players "
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryGroup colorScale={["red", "blue"]}>
            <VictoryBar
              alignment="start"
              key={`home-tp-chart`}
              data={data.home}
            />
            <VictoryBar
              alignment="start"
              key={`away-tp-chart`}
              data={data.away}
            />
          </VictoryGroup>
          <VictoryAxis
            tickLabelComponent={
              <VictoryPortal>
                <VictoryLabel />
              </VictoryPortal>
            }
            style={{ tickLabels: { fontSize: 16, angle: -65 } }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={x => x}
            style={{ tickLabels: { fontSize: 14 } }}
            axisLabelComponent={<VictoryLabel />}
          />
        </VictoryChart>
      )
    } else {
      return null
    }
  }
}
