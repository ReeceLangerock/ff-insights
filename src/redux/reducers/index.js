import { combineReducers } from "redux"

import { insightsReducer } from "./insightsReducer"
import { leagueReducer } from "./leagueReducer"

export default combineReducers({
  insightsReducer,
  leagueReducer,
})
