import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"
import Header from "./header"
import Footer from "./General/Footer"
import Toast from "./General/Toast"
import "./layout.css"
import { connect } from "react-redux"
import styled from "styled-components"
import { styled as MUIStyled } from "@material-ui/styles"

const Layout = ({ children, fullWidth, toastData }) => {
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
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      {fullWidth && <main>{children}</main>}
      {!fullWidth && (
        <StyledContainer maxWidth="md">{children}</StyledContainer>
      )}
      <Footer></Footer>
      <Toast toastData={toastData} />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`

const StyledContainer = MUIStyled(Container)({
  flex: "1",
  ["@media (max-width:680px)"]: {
    padding: "0 .5rem",
  },
})

const mapStateToProps = state => ({
  toastData: state.toastReducer,
})

export default connect(
  mapStateToProps,
  null
)(Layout)
