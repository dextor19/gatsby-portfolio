import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import backgroundImage from '../images/illustrations/Coding _Monochromatic.svg';

const StyledHero = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f7f7f7;

    h3 {
      margin-bottom: 0;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    color: black;
    width: 20px;
    height: 20px;
    margin-top: 20px;
    margin-left: 40px;
    :hover {
      color: #5be7c6;
    }
  }
`;

const HeroH1 = styled.h1`
    font-size: 5rem;
    margin: 0;
`;

const CallToActionButton = styled.button`
    background-color: #64ffda;
    border: 2px solid black;
    border-radius: 4px;
    font-weight: bold;
    color: black;
    font-size: 1.3em;
    padding: 10px 50px;
    text-transform: uppercase;
    :hover{
        background-color: #233554;
        color: white;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: black;
    :hover {
      color: #5be7c6;
    }
`;

function Hero() {
  return (
    <StyledHero>
      <Container>
        <h3>Hi, my name is</h3>
        <HeroH1>Dexter Griffiths</HeroH1>
        <p>British web developer living in japan</p>
        <AnchorLink to="/#contact">
          <CallToActionButton>GET IN TOUCH</CallToActionButton>
        </AnchorLink>
        <Container3>
          <a href="https://github.com/dextor19" aria-label="GitHub Link" target="_blank" rel="noreferrer">
            <StyledFontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/dexter-griffiths-18750765" aria-label="Linkedin Link" target="_blank" rel="noreferrer">
            <StyledFontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://twitter.com/DexGriffiths" aria-label="Twitter Link" target="_blank" rel="noreferrer">
            <StyledFontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Container3>
      </Container>
      <Container2>
        <img src={backgroundImage} width="700rem" alt="" />
        <AnchorLink to="/#projects">
          <StyledFontAwesomeIcon id="arrow" icon={faArrowDown} size="3x" />
        </AnchorLink>
      </Container2>
    </StyledHero>
  );
}

export default Hero;
