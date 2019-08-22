export const insightsReducer = (
  state = {
    activeLeague: undefined,
    insights: {},
  },
  action
) => {
  switch (action.type) {
    case "HANDLE_LEAGUE_ADDITION_ATTEMPT":
      return {
        ...state,
        addition: {
          ...state.addition,
          ...action.data,
        },
      }

    default:
      return state
  }
}
