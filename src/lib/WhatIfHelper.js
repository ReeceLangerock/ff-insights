export default {
  generateOtherTeamsBeatenText(teamName, opponentName, numBeaten, numTeams) {
    let texts
    if (numBeaten === 1) {
      texts = [
        `${teamName} got lucky with their matchup, as they would have lost to every other team except for ${opponentName}`,
      ]
    } else if (numBeaten === numTeams - 1) {
      texts = [
        `With the league's top score ${teamName} would have defeated every team in the league this week.`,
        `${opponentName} didn't stand a chance. ${teamName} had the league's highest score and would have won every possible matchup.`,
      ]
    } else {
      texts = [
        `Besides ${opponentName}, ${teamName} would have beaten ${numBeaten -
          1} other teams this week.`,
        `In addition to ${opponentName}, ${teamName} would have triumphed over ${numBeaten} teams this week.`,
      ]
    }
    const rand = Math.floor(Math.random() * texts.length)
    return texts[rand]
  },
  generateOtherTeamsLostToText(winningTeam, losingTeam, numLostTo) {
    if (numLostTo === 0) {
      return ""
    }
    let texts = []
    if (numLostTo === 1) {
      texts = [
        `${losingTeam} had  bad matchup luck this week, as ${winningTeam} was the only team that they would have lost to.`,
      ]
    } else {
      texts = [
        `Besides ${winningTeam}, ${losingTeam} would have lost to ${numLostTo -
          1} other teams this week.`,
        `In addition to ${winningTeam}, ${losingTeam} would have been defeated by ${numLostTo} teams this week.`,
      ]
    }
    const rand = Math.floor(Math.random() * texts.length)

    return texts[rand]
  },
  generatePointsNeededToBeatAllText(winningTeam, pointsNeeded, winningScore) {
    let texts = []

    if (pointsNeeded === "0.00") {
      texts = [
        `By putting up ${winningScore} points, ${winningTeam} had the highest score in the league this week`,
      ]
    } else {
      texts = [
        `If ${winningTeam} had scored ${pointsNeeded} more points, they would have beaten all teams in the league this week.`,
      ]
    }
    const rand = Math.floor(Math.random() * texts.length)

    return texts[rand]
  },

  generatePointsNeededToLoseToAllText(losingTeam, pointsNeeded) {
    let texts
    if (parseInt(pointsNeeded) === 0) {
      texts = [
        `${losingTeam} would have lost to every other team in the league this week.`,
        `${losingTeam} put up the lowest point total in the league and would have lost every possible matchup.`,
      ]
    } else {
      texts = [
        `If ${losingTeam} had scored ${pointsNeeded} fewer points, they would have lost to all teams in the league this week.`,
      ]
    }
    const rand = Math.floor(Math.random() * texts.length)

    return texts[rand]
  },
}
