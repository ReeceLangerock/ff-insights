export const addInsight = (insights, leagueId, leagueName) => {
  return {
    type: "ADD_INSIGHT",
    insights,
    leagueId,
    leagueName,
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

export const addTopMatchupPlayers = (topPlayers, leagueId) => {
  return {
    type: "ADD_TOP_MATCHUP_PLAYERS",
    topPlayers,
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

export const setCurrentWeek = week => {
  return {
    type: "SET_CURRENT_WEEK",
    week,
  }
}
