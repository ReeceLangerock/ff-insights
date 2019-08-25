import React from "react"
import styled from "styled-components"
export default function Footer() {
  return <Container>© {new Date().getFullYear()}</Container>
}

const Container = styled.footer`
  align-self: center;
  background: #c83802;
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  color: white;
  font-size: 1.1rem;
  box-sizing: border-box;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`
