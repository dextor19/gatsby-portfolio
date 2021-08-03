import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"

const Layout = ({ children }) => {
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
          <GlobalStyle />
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          </Helmet>
          <Navbar />
          <MainWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </MainWrapper>
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout