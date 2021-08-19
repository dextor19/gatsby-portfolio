import React from 'react'
import styled from "styled-components"

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 80vh;
`;

const About = () => {

    return (
        <StyledAboutSection>
            <h1>About</h1>
        </StyledAboutSection>
    );
};

export default About;