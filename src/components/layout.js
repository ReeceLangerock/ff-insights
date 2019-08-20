/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"
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
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>
      <Footer>© {new Date().getFullYear()}</Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  background: #fff;
  min-height: 500px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  flex-direction: column;
  display: flex;
  min-height: 100vh;
`

const Footer = styled.footer`
  align-self: center;
`

const Main = styled.main`
  flex: 1;
padding: 0 1rem;
`

export default Layout
