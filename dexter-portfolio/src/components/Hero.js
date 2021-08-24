import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { srConfig } from './config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import backgroundImage from "../images/illustrations/Coding _Monochromatic.svg";

const StyledHero = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f7f7f7;
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

const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [fontColor, setFontColor] = useState('black');
    const revealTitle1 = useRef(null);
    const revealTitle2 = useRef(null);
    const revealParagraph = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      sr.reveal(revealTitle1.current, srConfig());
      sr.reveal(revealTitle2.current, srConfig());
      sr.reveal(revealParagraph.current, srConfig());
    }, []);

    return(
      <StyledHero>
        <Container>
          <h3 ref={revealTitle1}>Hi, my name is</h3>
          <HeroH1 ref={revealTitle2}>Dexter Griffiths</HeroH1>
          <p ref={revealParagraph}>British web developer living in japan</p>
          <AnchorLink to="/#contact">
              <CallToActionButton>GET IN TOUCH</CallToActionButton>
          </AnchorLink>
        </Container>
        <Container2>
          <img src={backgroundImage} width="700rem"></img>
          <AnchorLink to="/#projects">
              <StyledFontAwesomeIcon id="arrow" icon={ faArrowDown } size="3x" /> 
          </AnchorLink>
        </Container2>
      </StyledHero>
    )
  }

  export default Hero