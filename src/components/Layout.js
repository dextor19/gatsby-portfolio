import React, {useState} from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Navbar from "./Navbar"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./LayoutComponents"
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
  visibility: ${props => props.visible ? "visible" : "hidden"};
`;

const Layout = ({ children, padding, fixedNavbar}) => {
  const [angleUpIcon, setAngleUpIcon] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 100){
      setAngleUpIcon(true);
    } else {
      setAngleUpIcon(false);
    };
  };

  window.addEventListener('scroll', changeBackground);

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
                <AnchorLink to="#to-top">
                  <IconContainer visible={angleUpIcon ? 'visible' : ''}>
                    <FontAwesomeIcon icon={ faAngleUp } size="lg" color="white" /> 
                  </IconContainer>
                </AnchorLink>
            </MainWrapper>
        ) : ( 
            <MainWrapper id="to-top">
                <main>{children}</main>
                <AnchorLink to="/#to-top">
                  <IconContainer visible={angleUpIcon ? 'visible' : ''}>
                    <FontAwesomeIcon icon={ faAngleUp } size="lg" color="white" /> 
                  </IconContainer>
                </AnchorLink>
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