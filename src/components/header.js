import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink className="logo" to="/">
      {siteTitle}
    </StyledLink>
    <div>
      <StyledLink to="league?id=324353">Demo</StyledLink>
      <StyledLink to="/leagues">Leagues</StyledLink>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: var(--primary-color);
  margin-bottom: 1rem;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 500px) {
    padding: 1.5rem 0.75rem;
  }
`

const StyledLink = styled(Link)`
  color: #fff;
  margin-left: 1.25rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  &.logo {
    font-size: 1.5rem;
    margin-left: 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin-left: 0.5rem;

    &.logo {
      font-size: 1.25rem;
    }
  }
`
export default Header
