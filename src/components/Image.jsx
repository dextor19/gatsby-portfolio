import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled.div`
    max-width: 300px;
`;

function Image() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledImage>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </StyledImage>
  );
}

export default Image;
