import { getInsights } from "./../../lib/AxiosHelper"
import store from "./../../redux/store"
import * as actions from "./../../redux/actions/insightsActions"
import { getLeaguewideInsights } from "./../../lib/leagueInsights"

const InsightLoader = (function() {
  return {
    async parseUrl(url) {
      if (url) {
        url = url.location.search
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
    async load() {
      const { leagueId, insights } = store.getState().insightsReducer
      if (!insights[leagueId]) {
        try {
          const insights = await getInsights(leagueId)
          if (insights) {
          getLeaguewideInsights(insights)
            store.dispatch(actions.addInsight(insights, leagueId))
          } else {
            store.dispatch(
              actions.addInsight({ status: "not available" }, leagueId)
            )
          }
        } catch (e) {
          store.dispatch(
            actions.addInsight({ status: "not availabe" }, leagueId)
          )

          console.log(e)
        }
      }
    },
  }
})()

export default InsightLoader
