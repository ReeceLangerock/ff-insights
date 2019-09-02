import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"
import Header from "./header"
import Footer from "./General/Footer"
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledContainer maxWidth="md">
        <Main>{children}</Main>
      </StyledContainer>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledContainer = MUIStyled(Container)({
  minHeight: "100vh",
  flexDirection: "column",
  display: "flex",

  ["@media (max-width:680px)"]: {
    padding: "0 .5rem",
  },
})

const Main = styled.main`
  flex: 1;
`

export default Layout
