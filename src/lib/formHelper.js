export const validateEmail = email => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export const validateLeagueId = leagueId => {
  if (Array.isArray(leagueId)) {
    return leagueId.every(id => id.match(/^\d*$/) && id.length > 3)
  } else {
    return leagueId.match(/^\d*$/) && leagueId.length > 3
  }
}
