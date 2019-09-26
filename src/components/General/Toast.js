import React, { Component } from "react"
import { styled as MUIStyled } from "@material-ui/styles"
import { Snackbar, SnackbarContent } from "@material-ui/core"
import { Error, CheckCircle } from "@material-ui/icons"
import { hideToast } from "./../../redux/actions/toastActions"
import store from "./../../redux/store"

export default class Toast extends Component {
  render() {
    const { type, message, visible } = this.props.toastData
    const bgColor = type === "success" ? "#43a047" : "#d32f2f"
    return (
      <StyledSnackbar
        className="error"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={visible}
        autoHideDuration={4000}
        onClose={() => store.dispatch(hideToast())}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
      >
        <SnackbarContent
          style={{
            background: bgColor,
          }}
          id="message-id"
          message={
            <span
              id="client-snackbar"
              style={{ display: "flex", alignItems: "center" }}
            >
              {type === "success" ? (
                <CheckCircle style={{ marginRight: ".5rem" }} />
              ) : (
                <Error style={{ marginRight: ".5rem" }} />
              )}
              {message}
            </span>
          }
        ></SnackbarContent>
      </StyledSnackbar>
    )
  }
}

const StyledSnackbar = MUIStyled(Snackbar)({})
