import React, { Component } from "react"
import styled from "styled-components"
export default class Form extends Component {
  render() {
    return (
      <StyledForm>
        <fieldset>
          <label>League Id</label>
          <input type="text"></input>
          <label>Your email address</label>
          <input type="email"></input>
          <label>league is private</label>

          <input type="checkbox"></input>
        </fieldset>

        <fieldset>
          <label>SWID</label>
          <input type="text"></input>
          <label>ESPN_S2</label>
          <input type="text"></input>
        </fieldset>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
  }
  input,
  label {
    margin: 0.5rem 0rem;
  }
  input {
    padding: 0.5em 0.5rem;
    border-radius: 5px;
    border: 1px solid;
  }
`
