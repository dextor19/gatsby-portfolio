import React, {useRef, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from "styled-components"
import { srConfig } from './config';
import sr from '../utils/sr';
import { usePrefersReducedMotion } from '../hooks';
import Img from 'gatsby-image';

const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #4bbda2;
  min-height: 80vh;

  h1 {
      color: white;
  }

  .wave {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
      position: relative;
      display: block;
      width: calc(129% + 1.3px);
      height: 126px;
  }

  .wave .shape-fill {
      fill: #f7f7f7;
  }

  .custom-shape-divider-bottom-1629726202 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1629726202 svg {
      position: relative;
      display: block;
      width: calc(129% + 1.3px);
      height: 126px;
  }

  .custom-shape-divider-bottom-1629726202 .shape-fill {
      fill: #233554;
  }

  /** For tablet devices **/
  @media (min-width: 768px) and (max-width: 1023px) {
      .custom-shape-divider-bottom-1629726202 svg {
          width: calc(126% + 1.3px);
          height: 126px;
      }
  }
`;

const useGallery = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "skills"}}) {
          nodes {
            publicURL
          }
        }
      }
    `);
  
    return data.allFile.nodes.map(node => ({
      publicURL: node.publicURL,
    }));
  };

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 4.2rem) 1fr;
    grid-template-rows: repeat(4, 4.2rem) 1fr;
    gap: 2rem 2rem;
    margin: 0;
`;


const Skills = () => {
    const revealTitle = useRef(null);
    const images = useGallery();
    const prefersReducedMotion = usePrefersReducedMotion();
    console.log(useGallery())
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      sr.reveal(revealTitle.current, srConfig());
    }, []);

    return (
        <StyledSkillsSection>
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <h1 ref={revealTitle}>SKILLS</h1>
            <ContentWrapper>
                {images.map(({ publicURL }) => (
                    <img src={publicURL} width="60rem" height="60rem" />
                ))}
            </ContentWrapper>
            <div class="custom-shape-divider-bottom-1629726202">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </StyledSkillsSection>
    );
};

export default Skills;