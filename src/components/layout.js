/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import { styled as MUIStyled } from "@material-ui/styles"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledContainer maxWidth="md">
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}</Footer>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledContainer = MUIStyled(Container)({
  background: "#fff",
  minHeight: "100vh",
  padding: 0,
  flexDirection: "column",
  display: "flex",
})

const Footer = styled.footer`
  align-self: center;
`

const Main = styled.main`
  flex: 1;
  padding: 0 1rem;
`

export default Layout
