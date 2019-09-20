import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function FormDialog({ leagueName }) {
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }


//   async function handleSubmit(e) {
//     this.setState({
//       showToast: false,
//       submissionMessage: "",
//       error: {},
//     })
//     e.preventDefault()
//     const validationPass = await this.validateForm()
//     let responseType = "error"
//     let response = {}
//     if (validationPass) {
//       response = await addLeague(this.state.form)
//       if (response.statusCode === 200) {
//         responseType = "success"
//       }
//       if (response.statusCode === 401) {
//         this.setState({ form: { ...this.state.form, isPrivate: true } })
//       }
//     } else {
//       Object.keys(this.state.error).forEach(error => {
//         if (this.state.error[error]) {
//           response.body = errors[error]
//         }
//       })
//     }


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
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            required
          />
          <DialogContentText style={{ marginTop: "1rem" }}>
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
