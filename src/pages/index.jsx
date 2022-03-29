import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Layout fixedNavbar>
        <SEO title="Dexter Griffiths" keywords={['gatsby', 'application', 'react']} />
        <Hero />
        <Projects />
        <About />
        <Skills />
      </Layout>
    </>
  );
};

export default IndexPage;
