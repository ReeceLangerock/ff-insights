import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
export default function Footer() {
  return (
    <Container>
      <GridContainer>
        <div>
          <StyledLink to="/">About</StyledLink>
          <StyledLink to="/privacy">Privacy Policy</StyledLink>
          <StyledLink to="/toc">Terms & Conditions</StyledLink>
        </div>
        <StyledLink to="/league?id=324353">Demo</StyledLink>
        <div>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </div>
        <div>
          <StyledA
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reddit.com/r/Insightful_FF/"
          >
            Contact Us
          </StyledA>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/JetsweepStudios?ref_src=twsrc%5Etfw"
            data-show-count="false"
          >
            <Image
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </Image>
          </a>
        </div>
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
  font-size: 1.4rem;
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
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.5rem;
  :hover {
    transition: 0.25s ease-in-out;
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

const Image = styled.svg`
  height: 35px;
  fill: hsla(0, 0%, 100%, 0.85);
  margin-top: 1rem;
  transition: 0.25s;

  :hover {
    transform: scale(1.1);
    transition: 0.25s;
  }
`
