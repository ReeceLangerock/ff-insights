import { combineReducers } from "redux"

import { insightsReducer } from "./insightsReducer"
import { leagueReducer } from "./leagueReducer"
import { toastReducer } from "./toastReducer"

export default combineReducers({
  insightsReducer,
  leagueReducer,
  toastReducer,
})
