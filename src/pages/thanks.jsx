import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 85vh;
  @media screen and (max-width: 768px) {
    min-height: 86.7vh;
  }
`;

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank you" />
      <StyledSection>
          <h1>Thank you</h1>
          <p>Thank you for the message, I will get back to you soon.</p>
      </StyledSection>
  </Layout>
);

export default ThanksPage;
