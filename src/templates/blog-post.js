import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

function BlogPostTemplate(props) {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  const readingTime = post.fields.readingTime.text.replace("read", "de leitura")

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <ReadingTime>
        <span>{post.frontmatter.date}</span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span>{readingTime}</span>
      </ReadingTime>
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#ccc",
          margin: "0.4rem 0 1.4rem 0",
        }}
      />
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      <Footer>
        © {new Date().getFullYear()}, feito por
        {` `}
        <a href="https://ufsm.br/" rel="noreferrer" target="_blank">
          UFSM-FW
        </a>
      </Footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
      }
      fields {
        slug
        readingTime {
          text
          words
        }
      }
    }
  }
`

const Footer = styled.footer`
  text-align: center;
`

const ReadingTime = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: clamp(14px, 2vw, 0.7rem);
`
