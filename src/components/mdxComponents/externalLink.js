import React from "react"
import styled from "styled-components"

export const ExternalLink = styled.a`
    font-weight: 900;
    text-decoration: none;
    color: var(--link);

    :hover {
      color: var(--link-hover);
      text-decoration: underline;
    }
`
export default props => {
  // for use with internal links
  // comment out for now
  // if (props.href.includes("adamgoth.com") || props.href[0] === "/") {
  //   return <a href={props.href}>{props.children}</a>
  // }
  return (
    <ExternalLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </ExternalLink>
  )
}
