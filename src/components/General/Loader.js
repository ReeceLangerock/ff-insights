import React from "react"
import { LinearProgress } from "@material-ui/core"

export default function Loader({ text }) {
  return (
    <div>
      <h1>{text}</h1>
      <LinearProgress style={{ marginTop: "2rem" }} />
    </div>
  )
}
