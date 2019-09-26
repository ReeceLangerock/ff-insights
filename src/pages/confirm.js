import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { confirmEmail } from "./../lib/AxiosHelper"
import { setToastData } from "./../redux/actions/toastActions"
import store from "./../redux/store"
import { Button } from "@material-ui/core"
import { styled as MUIStyled } from "@material-ui/styles"

async function handleSubmit(e) {
  const EMAIL_ID = window.location.search.split("id=")[1].split("&")[0]
  const response = await confirmEmail({ mutation: "confirm", EMAIL_ID })
  if (response.status === 200) {
    store.dispatch(setToastData("Your email was confirmed successfully", "success"))
  } else {
    store.dispatch(
      setToastData("There was an error confirming your email", "error")
    )
  }
}

const IndexPage = props => (
  <Layout>
    <SEO title="Privacy Policy" />
    <h1 style={{ marginTop: "4rem" }}>Confirm Your Email Address</h1>
    <p>Click the button below to confirm your email address</p>

    <StyledButton
      variant="contained"
      size="large"
      onClick={() => handleSubmit()}
    >
      Confirm
    </StyledButton>
  </Layout>
)

export default IndexPage

const StyledButton = MUIStyled(Button)({
  marginLeft: "auto",
  background: "var(--light-orange, #FF8360)",
  color: "white",

  "& .MuiButtonBase-root:hover": {
    backgroundColor: "var(--primary-color)",
  },
})
