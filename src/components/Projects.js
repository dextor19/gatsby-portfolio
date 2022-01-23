import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #233554;
  min-height: 80vh;
  
  h2 {
    color: var(--white);
    font-size: clamp(24px, 5vw, 32px);
    margin-top: 50px;
  }

  .archive-link {
    &:after {
      font-size: 14px;
      bottom: 0.1em;
    }
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    margin-right: 1.45rem;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  .more-button {
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 1.25rem 1.75rem;
    margin: 60px auto 60px;
    :hover{
      background-color: rgba(100, 255, 218, 0.1);
    }
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
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: transparent;
  list-style: none;
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: 4px;
    background-color: #112240;
    transition: transparent;
  }
  .project-top {
    margin-bottom: 35px;
    .folder {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      color: #64ffda;
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: #a8b2d1;
      a {
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
        :hover svg{
            color: #64ffda;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    color: #a8b2d1;
    font-size: 22px;
    a {
      position: static;
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      &:hover {
          color: #64ffda;
      }
    }
  }
  .project-description {
    color: #ffffffc4;
    font-size: 17px;
    a {
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    color: #54d6b8;
    li {
      font-size: 14px;
      line-height: 1.75;
      margin-bottom: 0;
      &:not(:last-of-type) {
        margin-right: 40px;
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
        projects: allMdx(
        filter: {fileAbsolutePath: {regex: "/content/projects/"}}
        sort: {order: DESC, fields: frontmatter___date}
        ) {
        edges {
            node {
            frontmatter {
                tech
                title
                github
                external
                preview
            }
            body
            }
        }
        }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const GRID_LIMIT = 4;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstFour = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstFour;

  const projectInner = node => {
    const { frontmatter, body } = node;
    const { github, external, title, tech, preview } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
                <div className="project-links">
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={ faGithub } /> 
                </a>
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer">
                    <FontAwesomeIcon icon={ faExternalLinkAlt } /> 
                </a>
            </div>
            </div>
            
          </div>

          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
                {preview}
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection id="projects">
      <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <h2>LATEST PROJECTS</h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;