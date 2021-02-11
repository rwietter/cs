import { motion } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ease } from '../utils/motion.ease';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const hrefBeforePage = this.props.location.href

    const splitLink = hrefBeforePage.split("/")

    console.log(this.props.location.path)
    const beforeLink = splitLink.reduce((acc, el, idx) => {
      if (idx === splitLink.length - 1) {
        return acc
      }
      return el
    }, this.props.location.path)

    return (
      <motion.div {...ease}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Não encontrado" />
          <h1>Página não econtrada!</h1>
          <p>Você caiu em uma página que não existe!</p>
          <Link to={"/"} state={{ modal: true }}>
            <p>Partiu início ?</p>
          </Link>
        </Layout>
      </motion.div>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
