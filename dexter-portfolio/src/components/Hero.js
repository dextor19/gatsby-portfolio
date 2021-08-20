import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
    
    return(
      <StyledHero>
        <h3>Hi, my name is</h3>
        <HeroH1>Dexter Griffiths</HeroH1>
        <p>BRITISH WEB DEVELOPER LIVING IN JAPAN</p>
        <AnchorLink to="/#projects">
            <FontAwesomeIcon icon={ faArrowDown } size="3x" color="black" /> 
        </AnchorLink>
      </StyledHero>
    )
  }

  export default Hero