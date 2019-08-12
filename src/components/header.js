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
  padding: 10px;
  background: #e6e6e6;
`

const StyledLink = styled(Link)`

margin-right: 10px;
text-decoration: none;
font-weight: bold;
font-size: 1rem;
`

export default Header
