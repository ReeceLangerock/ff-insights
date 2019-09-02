export const insightsReducer = (
  state = {
    leagueId: undefined,
    matchup: undefined,
    insights: {},
    topStarters: {},
    topBench: {},
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

    default:
      return state
  }
}
