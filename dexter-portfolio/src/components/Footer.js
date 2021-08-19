import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem;
`

const Footer = () => (
  <StyledFooter>
      © {new Date().getFullYear()}, Dexter Griffiths
  </StyledFooter>
)

export default Footer