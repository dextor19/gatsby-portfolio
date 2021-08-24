import React, {useRef, useEffect} from 'react'
import styled from "styled-components"
import { srConfig } from './config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import codingHands from "../images/Coding_Hands.svg";

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  min-height: 80vh;

  .wave {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
      position: relative;
      display: block;
      width: calc(129% + 1.3px);
      height: 126px;
  }

  .wave .shape-fill {
      fill: #233554;
  }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;

const About = () => {
    const revealTitle = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      sr.reveal(revealTitle.current, srConfig());
    }, []);

    return (
        <StyledAboutSection id="about">
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <h1 ref={revealTitle}>ABOUT</h1>
            <Container>
                <p>paragraph for testing out the about section.</p>
                <img src={codingHands} width="400rem"></img>
            </Container>
        </StyledAboutSection>
    );
};

export default About;