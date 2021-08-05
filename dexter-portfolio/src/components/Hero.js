import React from "react"
import styled from "styled-components"
import Video from "../assets/videos/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const StyledHero = styled.div`
    min-width: 100%;
    min-height: 100vh;
    margin-top: -10vh;
    
    @media (max-width: 768px) {
        margin-top: 0;
      }
`

const StyledVideo = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`
const HeroContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const HeroH1 = styled.h1`
    text-align: center;
    color: white;
`

const Hero = (props) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return(
      <StyledHero>
        <StyledVideo autoPlay loop muted width={width} height={height} src={Video} type='video/mp4' />
        <HeroContent>
            <HeroH1>Web Developer <FontAwesomeIcon icon={ faArrowDown } /> </HeroH1>
        </HeroContent>
      </StyledHero>
    )
  }

  export default Hero