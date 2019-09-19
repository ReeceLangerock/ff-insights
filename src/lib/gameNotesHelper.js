import NLP from "./NLP"

export default {
  getWinningTeamPositionNote(notes, teamName, TEAM_COUNT) {
    let text = ""
    if (notes.rbRank <= TEAM_COUNT / 2 || notes.wrRank <= TEAM_COUNT / 2) {
      const pos =
        notes.rbRank < notes.wrRank
          ? { points: notes.RB, rank: notes.rbRank, name: "running backs" }
          : { points: notes.WR, rank: notes.wrRank, name: "wide receivers" }
      text = `${teamName}'s victory was greatly aided by the efforts of their ${
        pos.name
      }. As a unit they put up ${pos.points.toFixed(
        2
      )} points, good for ${NLP.highLowHelper(
        pos.rank,
        TEAM_COUNT
      )} score in the league`
    } else {
      const pos =
        notes.rbRank > notes.wrRank
          ? { points: notes.RB, rank: notes.rbRank, name: "running backs" }
          : { points: notes.WR, rank: notes.wrRank, name: "wide receivers" }
      text = `${teamName}'s won despite the poor performance of their ${
        pos.name
      }. As a unit they only scored ${pos.points.toFixed(
        2
      )} points, good for the ${NLP.highLowHelper(
        pos.rank,
        TEAM_COUNT
      )} lowest score in the league`
    }
    return text
  },
  getLosingTeamPositionNote(notes, teamName, TEAM_COUNT) {
    let text = ""
    if (notes.rbRank <= TEAM_COUNT / 2 || notes.wrRank <= TEAM_COUNT / 2) {
      const pos =
        notes.rbRank < notes.wrRank
          ? { points: notes.RB, rank: notes.rbRank, name: "running backs" }
          : { points: notes.WR, rank: notes.wrRank, name: "wide receivers" }
      text = `${teamName}'s lost despite the strong showing of their ${
        pos.name
      }. As a unit they put up ${pos.points.toFixed(
        2
      )} points, good for the ${NLP.highLowHelper(
        pos.rank,
        TEAM_COUNT
      )} score in the league`
    } else {
      const pos =
        notes.rbRank > notes.wrRank
          ? { points: notes.RB, rank: notes.rbRank, name: "running backs" }
          : { points: notes.WR, rank: notes.wrRank, name: "wide receivers" }
      text = `${teamName}'s didn't get much help from their ${
        pos.name
      }. As a unit they only scored ${pos.points.toFixed(
        2
      )} points, good for ${NLP.highLowHelper(
        pos.rank,
        TEAM_COUNT
      )} score in the league`
    }
    return text
  },
  getMarginText(margin, marginOfVictoryRank) {
    return `The ${margin.toFixed(
      2
    )} point margin of victory for this matchup ended up being the ${NLP.highLowHelper(
      marginOfVictoryRank
    )} in the league this week.`
  },
}
