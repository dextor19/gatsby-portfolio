import React from 'react'
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const StyledCallToActionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  border-top: 1px solid var(--link);
`;

const CallToActionButton = styled.button`
    background-color: transparent;
    border: 1px solid var(--link);
    border-radius: 4px;
    color: var(--link);
    font-size: 1em;
    padding: 10px 50px;
    text-transform: uppercase;
    font-weight: normal;
    :hover{
        background-color: rgba(100, 255, 218, 0.1);
    }
`;

const CallToActionAnchor = styled(AnchorLink)`
    color: var(--link);
`;

const CallToAction = () => {

    return (
        <StyledCallToActionSection>
            <h3>NEED A WEB DEVELOPER IN JAPAN ?</h3>
            <h1>Start your next project</h1>
            <p>let's work together on your next project to build a web application experience that your customers cannot resist.</p>
            <AnchorLink to="/#contact">
                <CallToActionButton>GET IN TOUCH</CallToActionButton>
            </AnchorLink>
        </StyledCallToActionSection>
    );
};

export default CallToAction;