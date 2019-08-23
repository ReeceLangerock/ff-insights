export const addInsight = (insights, leagueId) => {
    console.log(insights)
  return {
    type: "ADD_INSIGHT",
    insights,
    leagueId,
  }
}

export const setLeagueId = (leagueId) => {
    return {
      type: "SET_LEAGUE_ID",
      leagueId,
    }
  }

  export const setMatchup = (matchup) => {
    return {
      type: "SET_MATCHUP",
      matchup,
    }
  }
