import { motion } from 'framer-motion';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LottieError from '../data/lotties/40806-error-404.json';
import { ease } from '../utils/motion.ease';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: LottieError,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    const updateEase = {
      ...ease,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    }

    return (
      <motion.div {...updateEase}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Não encontrado" />
          <h1>Página não econtrada!</h1>
          <Lottie
            options={defaultOptions}
            style={{ width: "100%" }}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
          <ErrorDescription>
            <p>Você caiu em uma página que não existe!</p>
            <Link to={"/"} state={{ modal: true }}>
              <p>Partiu início ?</p>
            </Link>
          </ErrorDescription>
        </Layout>
      </motion.div>
    )
  }
}

const ErrorDescription = styled.div`
  font-family: "Poppins";
  > p {
    font-weight: bolder;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
  }

  > a {
    font-weight: 800;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    > p {
      max-width: max-content;
      transition: box-shadow 0.4s ease-in;
      &:hover {
        box-shadow: inset 0 -13px 0 rgba(0, 170, 275, 0.5);
      }
    }
  }
`

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
