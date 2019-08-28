import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">{siteTitle}</StyledLink>
    <div>
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
  padding: 1rem;
  background: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
`
export default Header

