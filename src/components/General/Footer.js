import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
export default function Footer() {
  return (
    <Container>
      <GridContainer>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/league?id=324353">Demo</StyledLink>
        <StyledLink to="/signup">Sign Up</StyledLink>
        <StyledA target= "_blank" rel= "noopener noreferrer" href = "https://www.reddit.com/r/Insightful_FF/">Contact Us</StyledA>
      </GridContainer>

      <Copyright>© {new Date().getFullYear()} Jetsweep Studios</Copyright>
    </Container>
  )
}

const Copyright = styled.div`
  color: hsla(0, 0%, 100%, 0.85);
  text-align: center;
  font-size: 1.2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`
const StyledA = styled.a`
 color: hsla(0, 0%, 100%, 0.85);
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
  :hover {
    transition: 0.3s ease-in-out;
    color: hsla(0, 0%, 100%, 1);
  }
`

const StyledLink = styled(Link)`
  color: hsla(0, 0%, 100%, 0.85);
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
  :hover {
    transition: 0.3s ease-in-out;
    color: hsla(0, 0%, 100%, 1);
  }
`

const Container = styled.footer`
  background: var(--primary-color);
  margin-top: 6rem;
  padding: 3rem 15% 1.5rem 15%;
  width: 100%;
  box-sizing: border-box;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 800px) {
    padding: 3rem 5% 1.5rem 5%;
  }
`
