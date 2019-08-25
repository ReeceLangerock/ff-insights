import React, { Component } from "react"
import { styled as MUIStyled } from "@material-ui/styles"
import { addLeague } from "./../../lib/AxiosHelper"
import FormItem from "./FormItem"
import { Button, Card } from "@material-ui/core"
import Toast from "../General/Toast"
import Instructions from "./Instructions"
import { leagueId, email, isPrivate, SWID, ESPN_S2 } from "./formData"

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
      showToast: false,
      submissionMessage: "",
      responseType: "",
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    const response = await addLeague(this.state.form)

    let responseType = "error"
    if (response.statusCode === 200) {
      responseType = "success"
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
    const { form } = this.state
    return (
      <div>
        <FormGroup>
          <FormItem
            data={leagueId}
            type="text"
            value={form.leagueId}
            pattern=".{0}|.{4,}"
            required
            onChange={e => this.handleChange("leagueId", e.target.value)}
          ></FormItem>

          <FormItem
            data={email}
            type="email"
            value={form.email}
            pattern=".{0}|.{8,}"
            required
            onChange={e => this.handleChange("email", e.target.value)}
          ></FormItem>

          <FormItem
           data = {isPrivate}
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
            pattern=".{0}|.{8,}"
            onChange={e => this.handleChange("SWID", e.target.value)}
          ></FormItem>

          <FormItem
            data={ESPN_S2}
            type="text"
            value={form.ESPN_S2}
            required={form.isPrivate}
            pattern=".{0}|.{8,}"
            onChange={e => this.handleChange("ESPN_S2", e.target.value)}
          ></FormItem>
        </FormGroup>

        <Toast
          open={this.state.showToast}
          handleClose={() => this.setState({ showToast: false })}
          message={this.state.submissionMessage}
          responseType={this.state.responseType}
        ></Toast>
        <StyledButton
          variant="contained"
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
})

const FormGroup = MUIStyled(Card)({
  display: `${props => (props.hidden ? "none" : "block")}`,
  padding: "1rem",
  marginBottom: "1rem",
})
