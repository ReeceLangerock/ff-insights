import React, { Component } from "react"
import styled from "styled-components"
import { styled as MUIStyled } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import Switch from "@material-ui/core/Switch"
import TextField from "@material-ui/core/TextField"
import Info from "@material-ui/icons/Info"
export default class FormItem extends Component {
  state = {
    infoShown: false,
  }

  renderInputType() {
    const { data, value, onChange, type, required, pattern } = this.props
    if (type === "checkbox") {
      return (
        <FormControlLabel
          control={<Switch size="medium" checked={value} onChange={onChange} />}
          label={data.label}
          labelPlacement="start"
        ></FormControlLabel>
      )
    } else {
      return (
        <StyledTextField
          id={data.label}
          label={data.label}
          value={value}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          pattern={pattern}
          required ={required}
        />
      )
    }
  }
  render() {
    const { data } = this.props
    return (
      <Container>
        {this.renderInputType()}
        {data.text && (
          <>
            <IconButton
              onClick={() => {
                this.setState({ infoShown: !this.state.infoShown })
              }}
            >
              <Info />
            </IconButton>
            <InfoContainer hidden={!this.state.infoShown}>
              {data.text}
              {data.image && (
                <>
                  <br />
                  <img src={data.image} alt="info instructions" />
                </>
              )}
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
  flex-wrap: wrap;
`

const StyledTextField = MUIStyled(TextField)({
  flex: 2,
})
