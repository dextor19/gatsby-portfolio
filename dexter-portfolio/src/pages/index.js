import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import { Container, Section } from "../components/layoutComponents"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
    <Layout>
      <Hero />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Section>
        <Header siteTitle={data.site.siteMetadata.title} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </Section>
        <Section>
          <p>Now go build something great.</p>
        </Section>
        <Section>
          <p>Now go build something great.</p>
        </Section>
        <Section>
          <p>Now go build something great.</p>
          <Image />
          <Link to="/page-2/">Go to page 2</Link>
        </Section>
    </Layout>
    </>
    )
  }

export default IndexPage