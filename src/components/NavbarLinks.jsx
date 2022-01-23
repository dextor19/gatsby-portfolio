import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--secondary-color);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--secondary-color);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavItemAnchor = styled(AnchorLink)`
  text-decoration: none;
  color: var(--white);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--secondary-color);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--secondary-color);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const CallToActionButton = styled.button`
background-color: transparent;
border: 1px solid #64ffda;
border-radius: 4px;
color: #64ffda;
font-size: 1em;
padding: 10px 30px;
text-transform: uppercase;
font-weight: normal;
:hover{
    background-color: rgba(100, 255, 218, 0.1);
}
`;

function NavbarLinks() {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItemAnchor to="/#projects">Work</NavItemAnchor>
      <NavItemAnchor to="/#about">About</NavItemAnchor>
      <NavItem to="/blog">Blog</NavItem>
      <AnchorLink to="/#contact">
        <CallToActionButton>GET IN TOUCH</CallToActionButton>
      </AnchorLink>
    </>
  );
}

export default NavbarLinks;
