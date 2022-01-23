import React from 'react';
import styled from 'styled-components';
import codingHands from '../images/illustrations/Coding_Hands.svg';

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
    justify-content: center;
    flex-direction: row;
`;

const Paragraphs = styled.div`
    width: 40%;
    display: flex;
    align-items: right;
    justify-content: space-evenly;
    flex-direction: column;
    p {
        max-width: 700px;
        margin: 8px;
        letter-spacing: 1.3px;
    }
`;
function About() {
  return (
    <StyledAboutSection id="about">
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
        </svg>
      </div>
      <h1>ABOUT</h1>
      <Container>
        <Paragraphs>
          <p>Hi! My name is Dexter and I`&apos;`m a software engineer living in Japan. </p>
          <p> I create high quality web applications and websites using Javascript, React and Node.js.</p>
          <p>I currently work with a Japanese company to build cyber security applications to protect businesses and public intiutions from cyber attacks.</p>
          <p>Over the years, I have become passionate about open source software and working with other developers to build innovative solution.</p> 
          <p>Recently, I have been focused on TypeScript due to the benefits of strict typing for both frontend and backend development.</p>
        </Paragraphs>
        <img src={codingHands} width="400rem" alt="" />
      </Container>
    </StyledAboutSection>
  );
}

export default About;
