export const leagueReducer = (
  state = {
    leagues: [],
  },
  action
) => {
  switch (action.type) {
    case "SAVE_LEAGUES":
      return {
        ...state,
        leagues: action.leagues,
      }

    default:
      return state
  }
}
