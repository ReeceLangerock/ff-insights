import axios from "axios"
const ROOT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://aw2ua68a2j.execute-api.us-east-2.amazonaws.com/production"

export const getLeagueList = async () => {
  try {
    const response = await axios.get(`${ROOT_URL}/leagues`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
//comment for dev branch

export const addLeague = async body => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/leagues`,
      JSON.stringify({
        ...body,
      })
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getInsights = async id => {
  try {
    const response = await axios.get(`${ROOT_URL}/insights?id=${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return { }
  }
}
