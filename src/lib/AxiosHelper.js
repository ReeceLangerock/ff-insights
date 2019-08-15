import axios from "axios"
const ROOT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://aw2ua68a2j.execute-api.us-east-2.amazonaws.com/production"

export const getLeagueList = async () => {
  try {
    const response = await axios.get(`${ROOT_URL}/leagues`)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getInsight = async (id, matchup) => {
  try {
    const response = await axios.get(`${ROOT_URL}/insights/${id}/${matchup}`)
    return response.data.insight
  } catch (error) {
    console.error(error)
  }
}

export const getInsights = async id => {
  try {
    const response = await axios.get(`${ROOT_URL}/insights/${id}`)
    return response.data.insights
  } catch (error) {
    console.error(error)
  }
}
