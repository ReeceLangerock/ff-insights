import React, { Component } from "react"
import styled from "styled-components"

export default class FormItem extends Component {
  state = {
    infoShown: false,
  }
  render() {
    const {
      label,
      value,
      onChange,
      type,
      infoText,
      infoImageSrc,
      required,
      pattern,
    } = this.props
    return (
      <Container>
        <Label>{label}</Label>
        <input
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          pattern={pattern}
        ></input>
        {infoText && (
          <>
            <Info
              onClick={() => {
                this.setState({ infoShown: !this.state.infoShown })
              }}
            >
              i
            </Info>
            <InfoContainer hidden={!this.state.infoShown}>
              {infoText}
              {infoImageSrc && (
                <>
                  <br />
                  <img src={infoImageSrc} alt = "info instructions"/>
                </>
              )}
              {/* src/images/leagueIdExample.png */}
            </InfoContainer>
          </>
        )}
      </Container>
    )
  }
}

const InfoContainer = styled.div`
  width: 100%;
  margin-top: 0.75rem;
  display: ${props => (props.hidden ? "none" : "block")};
  font-size: 15px;
  img {
    margin: 0.25rem 0;
    max-width: 100%;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  input {
    flex: 2;
    padding: 0.5rem;
    border-radius: var(--border-radius-s);
    border: 1px solid hsla(17, 100%, 7%, 1);
    outline: none;

    &[type="checkbox"] {
      margin: 0 0 1rem 0;
      height: 36px;
    }
  }
`

const Label = styled.label`
  display: flex;
  flex: 1;
  align-items: center;
  font-weight: bold;
  color: hsla(17, 100%, 7%, 1);
`
const Info = styled.span`
  border-radius: 50%;
  margin-left: 10px;
  height: 24px;
  width: 24px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border: 3px solid hsla(17, 100%, 7%, 1);
`
