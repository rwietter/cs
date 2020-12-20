import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';

import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { GlobalStyle } from '../styles';
import { events } from './data/data';
import * as S from './styles';

function Home({ location }) {
  const { scrollYProgress } = useViewportScroll()

  const scaleIllustrationProgressY = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [1, 0.8]
  )

  const progressIllustrationY = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["15vh", "1vh"]
  )

  const progressPolygonTextX = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["10vw", "0vw"]
  )

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
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
          <p>Welcome to your new Gatsby website. You are on your home page.</p>
          <p>
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.
          </p>
          <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link>
        </Layout>
      </S.Container>
      <S.Image />
      <S.Background>
        <S.Illustration
          style={{
            y: progressIllustrationY,
            scale: scaleIllustrationProgressY,
          }}
        />
        <S.BackgroundText>
          <motion.h1
            style={{
              y: progressPolygonTextX,
            }}
          >
            Lorem, ipsum dolor sit
          </motion.h1>
          <motion.p
            exit="hidden"
            style={{
              x: progressPolygonTextX,
            }}
          >
            amet consectetur adipisicing elit. Debitis tempora, eveniet nihil
            repellendus soluta quasi praesentium. Aperiam quia est quasi, eos
          </motion.p>
        </S.BackgroundText>
      </S.Background>
      <S.SectionEvents>
        <h1>Eventos</h1>
        <S.Events>
          {events.map(event => (
            <a href="#">
              <section key={event.name} className="grid-item">
                <div className="grid-item_profile">
                  <img src={event.img} />
                  <h2>{event.name}</h2>
                </div>
                <div className="grid-item__description">
                  <p>{event.description}</p>
                  <p>
                    <span>Data:</span> {event.date}
                  </p>
                  <p>
                    <span>Local:</span> {event.location}
                  </p>
                </div>
              </section>
            </a>
          ))}
        </S.Events>
      </S.SectionEvents>
      <S.Footer>
        <span>
          © {new Date().getFullYear()}, feito para &nbsp;
          <a href="https://ufsm.br/" rel="noreferrer" target="_blank">
            UFSM-FW
          </a>
        </span>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Home
