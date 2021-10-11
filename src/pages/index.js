import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import ContactForm from "../components/Contact"
import About from "../components/About"
import Skills from "../components/Skills"
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
    <Layout fixedNavbar>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <ContactForm />
    </Layout>
    </>
    )
  }

export default IndexPage