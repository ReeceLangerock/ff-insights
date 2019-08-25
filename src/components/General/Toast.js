import React, { Component } from "react"
import { styled as MUIStyled } from "@material-ui/styles"
import { Snackbar, SnackbarContent } from "@material-ui/core"
import { Warning, Close, Info, Error, CheckCircle } from "@material-ui/icons"

export default class Toast extends Component {
  render() {
    const { responseType } = this.props
    const bgColor = responseType === "success" ? "#43a047" : "#d32f2f"
    return (
      <StyledSnackbar
        className="error"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={this.props.open}
        autoHideDuration={5000}
        onClose={this.props.handleClose}
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
              {this.props.responseType === "success" ? (
                <CheckCircle style={{ marginRight: ".5rem" }} />
              ) : (
                <Error style={{ marginRight: ".5rem" }} />
              )}
              {this.props.message}
            </span>
          }
        ></SnackbarContent>
      </StyledSnackbar>
    )
  }
}

const StyledSnackbar = MUIStyled(Snackbar)({})
