import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Styled404Section = styled.section`
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

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404Section>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Styled404Section>
  </Layout>
);

export default NotFoundPage;
