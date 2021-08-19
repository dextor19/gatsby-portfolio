import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const StyledHero = styled.section`
    min-height: 100vh;
    background-color: #f7f7f7;
`
const HeroContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const HeroH1 = styled.h1`
    text-align: center;
    font-size: 50px;
    color: black;
`
const HeroP = styled.p`
    text-align: center;
    color: black;
`

const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return(
      <StyledHero>
        <HeroContent>
            <HeroH1>Dexter Griffiths</HeroH1>
            <HeroP>BRITISH WEB DEVELOPER LIVING IN JAPAN</HeroP>
            <FontAwesomeIcon icon={ faArrowDown } /> 
        </HeroContent>
      </StyledHero>
    )
  }

  export default Hero