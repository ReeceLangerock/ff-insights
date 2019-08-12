import axios from "axios"
export const getLeagueList = async () => {
  try {
    const response = await axios.get("http://localhost:3001/leagues")
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getInsight = async (id, matchup) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/insights/${id}/${matchup}`
    )
    return response.data.insight
  } catch (error) {
    console.error(error)
  }
}

export const getInsights = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/insights/${id}`)
    return response.data.insights
  } catch (error) {
    console.error(error)
  }
}
