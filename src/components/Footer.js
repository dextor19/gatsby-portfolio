import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem;
`
const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    color: white;
    width: 20px;
    height: 20px;
    margin-right: 55px;
    :hover {
      color: #5be7c6;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    :hover {
      color: #5be7c6;
    }
`;

const Footer = () => (
  <StyledFooter>
      © {new Date().getFullYear()}, Dexter Griffiths
      <Container3>
        <a href="https://github.com/dextor19" aria-label="GitHub Link" target="_blank" rel="noreferrer">
          <StyledFontAwesomeIcon icon={ faGithub } size="2x" /> 
        </a>
        <a href="https://linkedin.com/in/dexter-griffiths-18750765" aria-label="Linkedin Link" target="_blank" rel="noreferrer">
          <StyledFontAwesomeIcon icon={ faLinkedin } size="2x" /> 
        </a>
        <a href="https://twitter.com/DexGriffiths" aria-label="Twitter Link" target="_blank" rel="noreferrer">
          <StyledFontAwesomeIcon icon={ faTwitter } size="2x" /> 
        </a>
      </Container3>
  </StyledFooter>
)

export default Footer