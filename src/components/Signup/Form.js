import React, { Component } from "react"
import styled from "styled-components"
import { addLeague } from "./../../lib/AxiosHelper"
import FormItem from "./FormItem"
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
      <StyledForm onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <FormItem
            label="League Id"
            infoText="The Id for your league can be found in the ESPN website url when you are on your leagues page."
            infoImageSrc="http://d16nyafvsvwqce.cloudfront.net/leagueIdExample.png"
            type="text"
            value={form.leagueId}
            pattern=".{0}|.{4,}"
            required
            onChange={e => this.handleChange("leagueId", e.target.value)}
          ></FormItem>

          <FormItem
            label="Your email address"
            infoText="Why do we need you email? We will send you a weekly email when new insights are available for your league. We may also send a short email in rare cases to inform you about major changes or problems with the site."
            type="email"
            value={form.email}
            pattern=".{0}|.{8,}"
            required
            onChange={e => this.handleChange("email", e.target.value)}
          ></FormItem>

          <FormItem
            label="League is private"
            type="checkbox"
            value={form.isPrivate}
            onChange={e => this.handleChange("isPrivate", !form.isPrivate)}
          ></FormItem>
        </fieldset>

        <Fieldset hidden={form.isPrivate === false}>
          <p>
            Unfortunately, for a private league you'll need to do a little bit
            of extra work in the developer panel of your web browser. I'll add a
            detailed walkthrough of this in the future.
          </p>
          <ol>
            <li>Open up developer panel. </li>
            <li>
              <b>Chrome / Brave: </b>Go to the application tab and open cookies
              on the left.
              <br />
              <b>Firefox / Safari: </b>Go to the storage tab and open cookies on
              the left
            </li>
            <li>
              Select the cookie for fantasy.espn and then search for the entry
              for swid and espn_s2.
            </li>
          </ol>

          <FormItem
            label="SWID"
            type="text"
            value={form.SWID}
            required={form.isPrivate}
            pattern=".{0}|.{8,}"
            onChange={e => this.handleChange("SWID", e.target.value)}
          ></FormItem>

          <FormItem
            label="ESPN_S2"
            type="text"
            value={form.ESPN_S2}
            required={form.isPrivate}
            pattern=".{0}|.{8,}"
            onChange={e => this.handleChange("ESPN_S2", e.target.value)}
          ></FormItem>
        </Fieldset>

        {this.state.showToast && <div>{this.state.submissionMessage}</div>}
        <Button type="submit"></Button>
      </StyledForm>
    )
  }
}

const Fieldset = styled.fieldset`
  display: ${props => (props.hidden ? "none" : "flex")};
`

const Button = styled.input`
  background: #c83802;
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: var(--border-radius-s);
  outline: none;
  border: 1px solid hsla(17, 100%, 7%, 1);
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
`

const StyledForm = styled.form`
  fieldset {
    flex-direction: column;
    margin: 0 0 1rem 0;
    border-radius: var(--border-radius-s);
    padding: 1rem 0.5rem;
    border: 1px solid hsla(17, 100%, 7%, 1);
  }
`
