import React, { Component } from "react"
import styled from "styled-components"
import Input from "./Input"
import {addLeague} from './../../lib/AxiosHelper'
export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leagueId: "",
      email: "",
      isPrivate: false,
      SWID: "",
      ESPN_S2: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    addLeague(this.state)
  }

  render() {
    return (
      <StyledForm onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <HorizontalContainer>
            <label>League Id</label>
            <Input
              type="text"
              value={this.state.leagueId}
              onChange={e => this.setState({ leagueId: e.target.value })}
            ></Input>
          </HorizontalContainer>
          <HorizontalContainer>
            <label>Your email address</label>
            <Input
              type="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            ></Input>
          </HorizontalContainer>
          <HorizontalContainer>
            <label>league is private</label>

            <input
              type="checkbox"
              defaultChecked={this.state.isPrivate}
              onChange={e =>
                this.setState({ isPrivate: !this.state.isPrivate })
              }
            ></input>
          </HorizontalContainer>
        </fieldset>

        <Fieldset hidden={this.state.isPrivate === false}>
          <HorizontalContainer>
            <label>SWID</label>
            <Input
              type="text"
              value={this.state.SWID}
              onChange={e => this.setState({ SWID: e.target.value })}
            ></Input>
          </HorizontalContainer>

          <HorizontalContainer>
            <label>ESPN_S2</label>
            <Input
              type="text"
              value={this.state.ESPN_S2}
              onChange={e => this.setState({ ESPN_S2: e.target.value })}
            ></Input>
          </HorizontalContainer>
        </Fieldset>

        <input type="submit"></input>
      </StyledForm>
    )
  }
}

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Fieldset = styled.fieldset`
  display: ${props => (props.hidden ? "none" : "flex")};
`

const StyledForm = styled.form`
  fieldset {
    flex-direction: column;

    label {
      display: flex;
      flex: 1;
      align-items: center;
      font-weight: bold;
    }
    input {
      margin: 1rem 0;
      flex: 2;
    }
  }
`
