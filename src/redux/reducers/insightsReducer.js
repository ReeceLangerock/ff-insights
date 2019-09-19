export const insightsReducer = (
  state = {
    leagueId: undefined,
    matchup: undefined,
    leagues: {},
    week: undefined,
    insights: {},
    topStarters: {},
    topBench: {},
    topMatchupPlayers: {},
  },
  action
) => {
  switch (action.type) {
    case "ADD_INSIGHT":
      return {
        ...state,
        insights: {
          ...state.insights,
          [action.leagueId]: action.insights,
        },
      }
    case "ADD_LEAGUE_INFO":
      return {
        ...state,
        leagues: {
          ...state.leagues,
          [action.leagueId]: action.leagueData,
        },
      }
    case "ADD_TOP_STARTERS":
      return {
        ...state,
        topStarters: {
          ...state.topStarters,
          [action.leagueId]: action.topStarters,
        },
      }
    case "ADD_TOP_BENCH":
      return {
        ...state,
        topBench: {
          ...state.topBench,
          [action.leagueId]: action.topBench,
        },
      }
    case "ADD_TOP_MATCHUP_PLAYERS":
      return {
        ...state,
        topMatchupPlayers: {
          ...state.topMatchupPlayers,
          [action.leagueId]: action.topPlayers,
        },
      }
    case "SET_LEAGUE_ID":
      return {
        ...state,
        leagueId: action.leagueId,
      }
    case "SET_MATCHUP":
      return {
        ...state,
        matchup: action.matchup,
      }
    case "SET_CURRENT_WEEK":
      return {
        ...state,
        week: action.week,
      }

    default:
      return state
  }
}
