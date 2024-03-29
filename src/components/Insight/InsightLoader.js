import { getInsights } from "./../../lib/AxiosHelper"
import store from "./../../redux/store"
import * as actions from "./../../redux/actions/insightsActions"
import { getLeaguewideInsights } from "./../../lib/leagueInsights"

const InsightLoader = (function() {
  return {
    async parseUrl(url) {
      if (url) {
        url = url.location.search
        let id
        let matchup
        if (url.includes("id=")) {
          id = url.split("id=")[1].split("&")[0]
          store.dispatch(actions.setLeagueId(id))
        }
        if (url.includes("matchup=")) {
          matchup = url.split("matchup=")[1]
          store.dispatch(actions.setMatchup(matchup))
        }
        return { id, matchup }
      }
    },
    async load() {
      const { leagueId, insights } = store.getState().insightsReducer
      if (!insights[leagueId]) {
        try {
          const { insights, week, leagueName,numTeams } = await getInsights(leagueId)
          if (insights) {
            const {
              topStarters,
              topBench,
              topMatchupPlayers,
            } = getLeaguewideInsights(insights)
            store.dispatch(actions.addLeagueInfo(leagueId, leagueName, numTeams))
            store.dispatch(actions.addTopStarters(topStarters, leagueId))
            store.dispatch(actions.addTopBench(topBench, leagueId))
            store.dispatch(
              actions.addTopMatchupPlayers(topMatchupPlayers, leagueId)
            )
            store.dispatch(actions.addInsight(insights, leagueId, leagueName))
            store.dispatch(actions.setCurrentWeek(week))
          } else {
            store.dispatch(
              actions.addInsight({ status: "not available" }, leagueId)
            )
          }
        } catch (e) {
          store.dispatch(
            actions.addInsight({ status: "not available" }, leagueId)
          )
          console.log(e)
        }
      }
    },
  }
})()

export default InsightLoader
