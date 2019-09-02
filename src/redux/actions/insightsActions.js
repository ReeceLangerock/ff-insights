export const addInsight = (insights, leagueId) => {
  return {
    type: "ADD_INSIGHT",
    insights,
    leagueId,
  }
}

export const addTopStarters = (topStarters, leagueId) => {
  return {
    type: "ADD_TOP_STARTERS",
    topStarters,
    leagueId,
  }
}

export const addTopBench = (topBench, leagueId) => {
  return {
    type: "ADD_TOP_BENCH",
    topBench,
    leagueId,
  }
}

export const setLeagueId = leagueId => {
  return {
    type: "SET_LEAGUE_ID",
    leagueId,
  }
}

export const setMatchup = matchup => {
  return {
    type: "SET_MATCHUP",
    matchup,
  }
}
