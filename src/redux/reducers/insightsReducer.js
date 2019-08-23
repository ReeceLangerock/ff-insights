export const insightsReducer = (
  state = {
    leagueId: undefined,
    matchup: undefined,
    insights: {},
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
