import React, { Component } from "react"
import { styled as MUIStyled } from "@material-ui/styles"
import { addLeague } from "./../../lib/AxiosHelper"
import FormItem from "./FormItem"
import { Button, Card } from "@material-ui/core"
import Toast from "../General/Toast"
import Instructions from "./Instructions"
import { leagueId, email, isPrivate, SWID, ESPN_S2, errors } from "./formData"

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        leagueId: "",
        email: "",
        isPrivate: false,
        SWID: "",
        ESPN_S2: "",
      },
      error: {},
      showToast: false,
      submissionMessage: "",
      responseType: "",
    }
  }

  async validateForm() {
    const { form } = this.state
    const errors = {
      leagueId: !(form.leagueId.match(/^\d*$/) && form.leagueId.length > 3),
      email: !form.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    }

    if (form.isPrivate) {
      errors.SWID = form.SWID.length <= 5
      errors.ESPN_S2 = form.ESPN_S2.length <= 5
    }
    this.setState({ error: errors })
    let numErrors = 0
    Object.keys(errors).forEach(err => {
      numErrors += errors[err] ? 1 : 0
    }, 0)
    return numErrors === 0
  }

  async handleSubmit(e) {
    this.setState({
      showToast: false,
      submissionMessage: "",
      error: {},
    })
    e.preventDefault()
    const validationPass = await this.validateForm()
    let responseType = "error"
    let response = {}
    if (validationPass) {
      response = await addLeague(this.state.form)
      if (response.statusCode === 200) {
        responseType = "success"
      }
      if (response.statusCode === 401) {
        this.setState({ form: { ...this.state.form, isPrivate: true } })
      }
    } else {
      Object.keys(this.state.error).forEach(error => {
        if (this.state.error[error]) {
          response.body = errors[error]
        }
      })
    }

    this.setState({
      showToast: true,
      submissionMessage: response.body || "Unknown error type",
      responseType,
    })
  }

  handleChange(key, value) {
    this.setState({
      form: { ...this.state.form, [key]: value },
    })
  }
  render() {
    const { form, error } = this.state
    return (
      <div>
        <FormGroup style={{ paddingRight: ".5rem" }}>
          <FormItem
            data={leagueId}
            type="text"
            value={form.leagueId}
            required
            error={error.leagueId}
            onChange={e => this.handleChange("leagueId", e.target.value)}
          ></FormItem>

          <FormItem
            data={email}
            type="email"
            value={form.email}
            error={error.email}
            required
            onChange={e => this.handleChange("email", e.target.value)}
          ></FormItem>

          <FormItem
            data={isPrivate}
            type="checkbox"
            value={form.isPrivate}
            onChange={e => this.handleChange("isPrivate", !form.isPrivate)}
          ></FormItem>
        </FormGroup>
        <FormGroup hidden={form.isPrivate === false}>
          <Instructions />

          <FormItem
            data={SWID}
            type="text"
            value={form.SWID}
            required={form.isPrivate}
            error={error.SWID}
            onChange={e => this.handleChange("SWID", e.target.value)}
          ></FormItem>

          <FormItem
            data={ESPN_S2}
            type="text"
            error={error.ESPN_S2}
            value={form.ESPN_S2}
            required={form.isPrivate}
            onChange={e => this.handleChange("ESPN_S2", e.target.value)}
          ></FormItem>

          <p>
            * If your league is public but you got an error regarding SWID or
            ESPN_S2 please wait and try again a bit later, this seems so be an
            intermittent issue with ESPN
          </p>
          <p>
            <b>
              * If you run into any issues please contact me! I'll do my best to
              figure out what went wrong and get your league up and running.
            </b>
          </p>
        </FormGroup>

        <Toast
          open={this.state.showToast}
          handleClose={() => this.setState({ showToast: false })}
          message={this.state.submissionMessage}
          responseType={this.state.responseType}
        ></Toast>
        <StyledButton
          variant="contained"
          size="large"
          onClick={this.handleSubmit.bind(this)}
        >
          Sign Up
        </StyledButton>
      </div>
    )
  }
}
const StyledButton = MUIStyled(Button)({
  marginLeft: "auto",
  background: "var(--light-orange, #FF8360)",
  color: "white",
  float: "right",

  "& .MuiButtonBase-root:hover": {
    backgroundColor: "var(--primary-color)",
  },
})

const FormGroup = MUIStyled(Card)({
  padding: "1rem",
  marginBottom: "1rem",
  display: props => (props.hidden ? "none" : "block"),
})
