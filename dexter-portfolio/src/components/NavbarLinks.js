import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

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
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/about">ABOUT</NavItem>
      <NavItem to="/projects">WORK</NavItem>
      <NavItem to="/blog">BLOG</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
    </>
  )
}

export default NavbarLinks