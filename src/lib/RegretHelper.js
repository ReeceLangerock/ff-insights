export const getWorstUnderperformingStarter = (players, data) => {
  let underachiever = players[0]

  players.forEach(p => {
    if (ignorePlayer(p, data.usedPlayers)) {
    } else if (
      p.points / p.projectedPoints <
      underachiever.points / underachiever.projectedPoints
    ) {
      underachiever = p
    }
  })

  const underperformPercent = (
    (underachiever.points / underachiever.projectedPoints) *
    100
  ).toFixed(2)

  const underachievingStarterByPercent = `The ${underachiever.points} points scored by ${underachiever.fullName} was just ${underperformPercent}% of his ${underachiever.projectedPoints} point projection.`
  data.usedPlayers = [...data.usedPlayers, underachiever.id]
  data.texts = { ...data.texts, underachievingStarterByPercent }
  return data
}

export const getWorstBenchDecision = async (players, data) => {
  const topBenchByPos = {}
  const bench = []
  const starters = []
  players.forEach(p => {
    if (p.lineupPosition === "Bench") {
      bench.push(p)
      if (!topBenchByPos[p.position]) {
        topBenchByPos[p.position] = p
      } else {
        topBenchByPos[p.position] =
          p.points > topBenchByPos[p.position].points
            ? p
            : topBenchByPos[p.position]
      }
    } else {
      starters.push(p)
    }
  })
  let fuckup = {
    RB: {},
    WR: {},
    TE: {},
    QB: {},
  }
  starters.forEach(p => {
    if (
      topBenchByPos[p.position] &&
      topBenchByPos[p.position].points > p.points
    ) {
      fuckup[p.position] = topBenchByPos[p.position]
    }
  })
  let fuckupText = {}
  if (fuckup.RB.id) {
    const P = fuckup.RB
    let underachieved = P.points < P.projectedPoints
    fuckupText.shouldHaveStartedRB = `Should have started ${P.fullName}, who `
    fuckupText.shouldHaveStartedRB += underachieved
      ? `underachieved but still should have been in the starting lineup, scoring ${P.points} points against a projected ${P.projectedPoints} points.`
      : `exceeded his projected ${P.projectedPoints} points, putting up ${P.points} points.`
  }
  if (fuckup.WR.id) {
    const P = fuckup.WR
    let underachieved = P.points < P.projectedPoints
    fuckupText.shouldHaveStartedWR = `Should have started ${P.fullName}, who `
    fuckupText.shouldHaveStartedWR += underachieved
      ? `underachieved but still should have been in the starting lineup, scoring ${P.points} points against a projected ${P.projectedPoints} points.`
      : `exceeded his projected ${P.projectedPoints} points, putting up ${P.points} points.`
  }
  data.texts = { ...data.texts, ...fuckupText }
  return data
}

export const getNumUnderachievers = (players, losingTeam, data) => {
  let underachievers = 0
  let rosterSize = 0

  players.forEach(p => {
    if (p.lineupPosition !== "Bench") {
      rosterSize++
    }

    if (p.lineupPosition === "Bench" || !p.points || !p.projectedPoints) {
    } else if (p.points <= p.projectedPoints) {
      underachievers++
    }
  })

  let numUnderachieversText = ""
  if (rosterSize / underachievers >= 2) {
    numUnderachieversText = `${losingTeam} lost despite only ${underachievers} of their ${rosterSize} starters failing to beat their scoring projections`
  } else {
    numUnderachieversText = `${losingTeam} really let their coach down this week, with ${underachievers} of their ${rosterSize} starters performing below their scoring projections`
  }

  data.texts = { ...data.texts, numUnderachieversText }
  return data
}

const ignorePlayer = (p, usedPlayers) => {
  return (
    p.lineupPosition === "Bench" ||
    p.lineupPosition === "D/ST" ||
    !p.points ||
    !p.projectedPoints ||
    usedPlayers.includes(p.id)
  )
}
