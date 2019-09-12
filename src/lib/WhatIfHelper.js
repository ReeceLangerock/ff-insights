export default {
  generateOtherTeamsBeatenText(teamName, opponentName, numBeaten) {
    let texts
    if (numBeaten === 1) {
      texts = [
        `${teamName} got lucky with their matchup, as they would have lost to every other team except for ${opponentName}`,
      ]
    } else {
      texts = [
        `Besides ${opponentName}, ${teamName} would have beaten ${numBeaten} other teams this week.`,
        `In addition to ${opponentName}, ${teamName} would have triumphed over ${numBeaten} other teams this week.`,
      ]
    }
    const rand = Math.floor(Math.random() * texts.length)
    return texts[rand]
  },
  generateOtherTeamsLostToText(winningTeam, losingTeam, numLostTo) {
    if(numLostTo === 0){
      return ""
    }
    const texts = [
      `Besides ${winningTeam}, ${losingTeam} would have lost to ${numLostTo} other teams this week.`,
      `In addition to ${winningTeam}, ${losingTeam} would have been defeated by ${numLostTo} other teams this week.`,
    ]
    const rand = Math.floor(Math.random() * texts.length)

    return texts[rand]
  },
  generatePointsNeededToBeatAllText(winningTeam, pointsNeeded) {
    const texts = [
      `If ${winningTeam} had scored ${pointsNeeded} more points, they would have beaten all teams in the league this week.`,
    ]
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
