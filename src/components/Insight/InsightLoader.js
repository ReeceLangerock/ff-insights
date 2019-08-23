import { getInsights } from "./../../lib/AxiosHelper"
import store from "./../../redux/store"
import * as actions from "./../../redux/actions/insightsActions"

const InsightLoader = (function() {
  return {
    parseUrl(url) {
      if (url) {
        if (url.includes("id=")) {
          const id = url.split("id=")[1].split("&")[0]
          store.dispatch(actions.setLeagueId(id))
        }
        if (url.includes("matchup=")) {
          const matchup = url.split("matchup=")[1]
          store.dispatch(actions.setMatchup(matchup))
        }
      }
    },
    async load(path) {
      this.parseUrl(path.location.search)
      const { leagueId, matchup, insights } = store.getState().insightsReducer
      if (!insights[leagueId]) {
        const insights = await getInsights(leagueId)
        store.dispatch(actions.addInsight(insights, leagueId))
      }
    },
  }
})()

export default InsightLoader
