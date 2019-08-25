/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Container, Paper} from "@material-ui/core"
import Header from "./header"
import Footer from './General/Footer'
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
      <Footer></Footer>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledContainer = MUIStyled(Container)({
  minHeight: "100vh",
  flexDirection: "column",
  display: "flex",
})


const Main = styled.main`
  flex: 1;
`

export default Layout
