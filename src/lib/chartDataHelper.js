export const getPointsByNflPosition = async players => {
  const PBP = { home: {}, away: {} }
  players.homeTeamRoster.forEach(p => {
    if (p.lineupPosition !== "Bench") {
      PBP.home[p.position] = PBP.home[p.position]
        ? PBP.home[p.position] + p.points
        : p.points
    }
  })
  players.awayTeamRoster.forEach(p => {
    if (p.lineupPosition !== "Bench") {
      PBP.away[p.position] = PBP.away[p.position]
        ? PBP.away[p.position] + p.points
        : p.points
    }
  })
  return PBP
}

export const getTopPlayers = async players => {
  const topPlayers = { home: [], away: [] }
  topPlayers.home = players.homeTeamRoster
    .filter(p => p.lineupPosition !== "Bench")
    .sort((a, b) => b.points - a.points)
    .slice(0, 4)
    .map(p => {
      return { x: p.fullName, y: p.points }
    })

  topPlayers.away = players.awayTeamRoster
    .filter(p => p.lineupPosition !== "Bench")
    .sort((a, b) => b.points - a.points)
    .slice(0,4)
    .map(p => {
      return {x: p.fullName, y: p.points }
    })

  return topPlayers
}
