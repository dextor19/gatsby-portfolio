import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
`

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
`

const NavbarLinks = () => {
  return (
    <>
      <NavItemAnchor to="/#about">About</NavItemAnchor>
      <NavItemAnchor to="/#projects">Work</NavItemAnchor>
      <NavItem to="/blog">Blog</NavItem>
      <NavItemAnchor to="/#contact">Contact</NavItemAnchor>
    </>
  )
}

export default NavbarLinks