import { motion } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import React from 'react';

import Bio from '../components/bio';
import Button from '../components/button';
import Layout from '../components/layout';
import SearchPosts from '../components/searchPosts';
import SEO from '../components/seo';
import { ease } from '../utils/motion.ease';

function Blog({ data, navigate, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const localSearchBlog = data.localSearchBlog

  return (
    <motion.div {...ease}>
      <Layout location={location} title={siteTitle}>
        <SEO title="Todos os posts" />
        <Bio />
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Link to="/">
          <Button marginTop="85px">Ir para o início</Button>
        </Link>
      </Layout>
    </motion.div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default Blog
