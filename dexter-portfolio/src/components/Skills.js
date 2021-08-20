import React from 'react'
import styled from "styled-components"

const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 80vh;
`;

const Skills = () => {

    return (
        <StyledSkillsSection>
            <h1>SKILLS</h1>
        </StyledSkillsSection>
    );
};

export default Skills;