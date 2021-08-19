import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"

const Layout = ({ children, padding}) => {
      return (
        <>
          <GlobalStyle />
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          </Helmet>
          <Navbar />
            {padding ? (
                <MainWrapper padded>
                    <main>{children}</main>
                </MainWrapper>
            ) : ( 
                <MainWrapper>
                    <main>{children}</main>
                </MainWrapper>
            )}
          <Footer />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout