export const getTopAtEachPosition = players => {
  const top = {
    QB: null,
    RB: null,
    WR: null,
    TE: null,
    "D/ST": null,
    K: null,
  }
  const sortedPlayers = players.sort((a, b) => b.points - a.points)
  for (let i = 0; i < sortedPlayers.length; i++) {
    const p = sortedPlayers[i]
    if (!top[p.position]) {
      top[p.position] = p
    } else {
      top[p.position] = top[p.position].points > p.points ? top[p.position] : p
    }
    if (allFilled(top)) {
      return top
    }
  }
  return top
}

const allFilled = positions =>
  Object.keys(positions).every(p => positions[p] !== null)

export const getLeaguewideInsights = async insights => {
  const { starters, bench } = parseInsights(insights)
  const topStarters = getTopAtEachPosition(starters)
  const topBench = getTopAtEachPosition(bench)
  console.log(topStarters, topBench)
}

const parseInsights = insights => {
  const starters = []
  const bench = []
  insights.forEach(insight => {
    insight.homeTeamRoster.forEach(player => {
      player.team = insight.homeTeam.name
      if (player.lineupPosition === "Bench") {
        bench.push(player)
      } else {
        starters.push(player)
      }
    })
    insight.awayTeamRoster.forEach(player => {
      player.team = insight.awayTeam.name

      if (player.lineupPosition === "Bench") {
        bench.push(player)
      } else {
        starters.push(player)
      }
    })
  })
  return { starters, bench }
}
