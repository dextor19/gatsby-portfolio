import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogList = styled.ul`
    padding: 1rem;
`
const BlogListItem = styled.li`
    padding: 1rem;
    list-style-type: none;
    margin-bottom: 3rem;
`
const BlogLink = styled(Link)`
    .blog__read-more {
        color: var(--link);
    }
    &:hover {
      .blog__read-more {
        color: var(--link-hover);
        text-decoration: underline;
        font-weight: 900;
      }
    }
`

const BlogIndex = ({ location }) => {
    const data = useStaticQuery(graphql`
        query blogIndex {
            allMdx(
            filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            sort: {order: DESC, fields: frontmatter___date}
            ) {
            edges {
            node {
                frontmatter {
                slug
                title
                preview
                }
              }
            }
          }
        }
  `)

  const { edges: posts } = data.allMdx;

  return (
    <Layout location={location} padding>
      <BlogList>
        {posts.map(({ node: post }) => (
          <BlogListItem key={post.id}>
            <BlogLink to={`/${post.frontmatter.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <h4 style={{ lineHeight: "1.7", fontWeight: "normal" }}>
                {post.frontmatter.preview}
              </h4>
              <h4 className="blog__read-more">Read more →</h4>
            </BlogLink>
          </BlogListItem>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogIndex