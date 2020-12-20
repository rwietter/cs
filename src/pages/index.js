import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { GlobalStyle } from '../styles';
import { rhythm } from '../utils/typography';

function Home({ location }) {
  const { scrollYProgress } = useViewportScroll()

  const scaleProgressY = useTransform(scrollYProgress, [0.2, 0.4], [0.5, 1])
  const progressY = useTransform(scrollYProgress, [0.1, 0.2], ["10vh", "0vh"])
  
  const {
    site: {
      siteMetadata: { title },
    },
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "home2.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <AnimatePresence>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Layout location={location} title={title}>
            <SEO
              title="Home"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <h1>
              Hey people{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h1>
            <p>
              Welcome to your new Gatsby website. You are on your home page.
            </p>
            <p>
              This starter comes out of the box with styled components and
              Gatsby's default starter blog running on Netlify CMS.
            </p>
            <Link to="/blog/">
              <Button marginTop="35px">Go to Blog</Button>
            </Link>
          </Layout>
        </Container>
        <Image />
        <Background>
          <Illustration
            style={{
              scale: scaleProgressY,
              y: progressY,
            }}
          />
        </Background>
        <Section></Section>
        <Footer>
          <span>
            © {new Date().getFullYear()}, feito por &nbsp;
            <a href="https://ufsm.br/" rel="noreferrer" target="_blank">
              UFSM-FW
            </a>
          </span>
        </Footer>
      </Wrapper>
    </AnimatePresence>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 0.3fr;
  gap: 10px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  p {
    font-size: clamp(0.8rem, 3vw, 1.5rem);
  }
`

const Container = styled.div`
  z-index: 1;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  height: 100%;
  justify-self: flex-start;
  align-self: flex-start;
  @media screen and(max-width: 720px) {
    justify-self: flex-end;
    align-self: flex-start;
    grid-row: 1 / 2;
    background-color: red;
    grid-column: 1 / 2;
  }
`

const Image = styled.img`
  background-image: url(${require("../data/home.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  @media screen and(min-width: 720px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`

const Background = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  width: 100%;
  height: 100%;
  color: #fff;
  clip-path: polygon(0 0, 100% 15%, 100% 89%, 0 100%);
  background-color: #ffffff;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  background: linear-gradient(50deg, #ff5555 0.57%, #3e0c82 100%);
`

const Section = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;
  position: relative;
`

const Footer = styled.footer`
  display: block;
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  width: 99vw;
  max-width: 100vw;
  overflow: hidden;
  background-image: url(${require("../data/waveGray.svg")});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  font-size: clamp(0.7rem, 3vw, 1rem);
  padding-bottom: ${rhythm(1)};
`

const Illustration = styled(motion.svg)`
  background-image: url(${require("../data/Blogging - Colour/blogging.png")});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 90%;
  align-self: center;
`

export default Home
