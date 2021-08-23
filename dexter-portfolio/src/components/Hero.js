import React, {useRef, useEffect} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { srConfig } from './config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 95vh;
    background-color: #f7f7f7;
`;

const HeroH1 = styled.h1`
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
`;

const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
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
        <h3 ref={revealTitle1}>Hi, my name is</h3>
        <HeroH1 ref={revealTitle2}>Dexter Griffiths</HeroH1>
        <p ref={revealParagraph}>BRITISH WEB DEVELOPER LIVING IN JAPAN</p>
        <AnchorLink to="/#projects">
            <FontAwesomeIcon icon={ faArrowDown } size="3x" color="black" /> 
        </AnchorLink>
      </StyledHero>
    )
  }

  export default Hero