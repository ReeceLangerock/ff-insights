import React, { Component } from "react"
import styled from "styled-components"
import { Button, Container } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroContent>
          <h1>Insightful</h1>
          <h2>Take your fantasy league to the next level</h2>

          <StyledButton variant="contained" size="large">
            Get started
          </StyledButton>
        </HeroContent>
      </Container>
    )
  }
}

const HeroContent = styled.div`
  margin: 3rem 0 6rem 0;
  font-family: "Ubuntu", sans-serif;
  h1 {
    font-size: 4rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: normal;
    width: 55%;
  }
  @media only screen and (max-width: 600px) {
  margin: 2rem 0 4rem 0;
    h2 {
      font-size: 2.2rem;
      width: 100%;
    }
  }
`

const StyledButton = MUIStyled(Button)({
  fontSize: "1.4rem",
  background: "var(--light-orange, #FF8360)",
  color: "white",
  "& .MuiButtonBase-root:hover": {
    backgroundColor: "var(--primary-color)",
  },
})
