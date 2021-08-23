import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const IconContainer = styled.div`
  position: fixed;
  text-align: center;
  bottom: 12px;
  right: 16px;
  background-color: #00000073;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  padding-top: 3px;
  
`;

const Layout = ({ children, padding, fixedNavbar}) => {
      return (
        <>
          <GlobalStyle />
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          </Helmet>
          {fixedNavbar ? <Navbar fixedNav /> : <Navbar /> }
            {padding ? (
                <MainWrapper padded id="to-top">
                    <main>{children}</main>
                </MainWrapper>
            ) : ( 
                <MainWrapper id="to-top">
                    <main>{children}</main>
                </MainWrapper>
            )}
          <AnchorLink to="#to-top">
            <IconContainer>
              <FontAwesomeIcon icon={ faAngleUp } size="lg" color="white" /> 
            </IconContainer>
          </AnchorLink>
          <Footer />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout