import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"
import { subscribeToLeagues } from "./../../lib/AxiosHelper"
import { setToastData } from "./../../redux/actions/toastActions"
import { errors } from "./../Signup/formData"
import store from "./../../redux/store"
import { validateEmail, validateLeagueId } from "./../../lib/formHelper"

export default function FormDialog({ leagueName, leagueId }) {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [leagues, setAdditionalLeagues] = React.useState("")

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  async function handleSubmit(e) {
    const leagueSet = new Set([leagueId])
    if (leagues) {
      leagueSet.add(...leagues.replace(/\s/g, "").split(","))
    }
    const leagueArray = [...leagueSet]
    const validLeagues = leagues.length === 0 || validateLeagueId(leagueArray)
    if (validateEmail(email) && validLeagues) {
      const response = await subscribeToLeagues({ email, leagues: leagueArray })
      if (response.status === 200) {
        store.dispatch(setToastData(response.data.message, "success"))
        setOpen(false)
      }
      if (response.statusCode === 401) {
        store.dispatch(
          setToastData(
            "There was an error subscribing you to the league",
            "error"
          )
        )
      }
    } else {
      const message = !validLeagues ? errors.leagueId : errors.email
      store.dispatch(setToastData(message, "error"))
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Sign me up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to {leagueName}, please enter your email address here.
            We will send updates every Tuesday during the regular season.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            required
            style={{ marginTop: 0 }}
          />
          <DialogContentText style={{ marginTop: "1.5rem" }}>
            If you'd like to subscribe to more leagues enter their ids,
            separated by a comma.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="ids"
            label="League ID's"
            type="ids"
            fullWidth
            value={leagues}
            onChange={e => setAdditionalLeagues(e.target.value)}
            style={{ marginTop: 0 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
