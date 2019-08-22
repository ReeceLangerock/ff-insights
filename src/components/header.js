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
  background: #c83802;
`

const StyledLink = styled(Link)`
color: #fff;
margin-right: 10px;
text-decoration: none;
font-weight: bold;
font-size: 1.2rem;
`

export default Header
// 32E875 - success
// 0B162A - navy
// c83802 - orange