import React, { Component } from "react"
import styled from "styled-components"
import { styled as MUIStyled } from "@material-ui/styles"

import { Container } from "@material-ui/core"

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default class ContentSection extends Component {
  render() {
    return (
      <StyledContainer>
        <h1>I want to hear from you!</h1>
        <Grid>
          <div>
            <h2>Is there a feature you want to see?</h2>
            <p>
              Leave a{" "}
              <a href="https://www.reddit.com/r/Insightful_FF/comments/cytqp8/feature_request/">
                comment
              </a>{" "}
              with an explanation of the feature
            </p>
          </div>
          <div>
            <h2>Have a bug to report?</h2>
            <p>
              Leave a quick note{" "}
              <a href="https://www.reddit.com/r/Insightful_FF/comments/czd4q7/bug_reports/">
                here
              </a>
              , with as much detail as you want to provide
            </p>
          </div>
          <div>
            <h2>Follow us on Twitter</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/JetsweepStudios?ref_src=twsrc%5Etfw"
              data-show-count="false"
            >
              <Image
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </Image>
            </a>
          </div>
        </Grid>
      </StyledContainer>
    )
  }
}

const Image = styled.svg`
  height: 45px;
  fill: var(--primary-color);
  margin-top: 1rem; 
  column-

`

const StyledContainer = MUIStyled(Container)({
  padding: "2rem 1.5rem",
  marginBottom: "2rem",
  marginTop: "4rem",
  "& h1": {
    textAlign: "center",
    margin: "0 0 3rem 0",
    fontSize: "2.5rem",
    fontFamily: "Ubuntu",
  },
  "& h2": {
    fontFamily: "Ubuntu",
    textAlign: "center",
    margin: ".75rem 0",
    fontSize: "1.5rem",
  },
})

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
  margin: 2rem 0;
  line-height: 1.25;
  font-size: 1.4rem;
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`
