import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      © {new Date().getFullYear()}, Dexter Griffiths
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
`

export default StyledFooter