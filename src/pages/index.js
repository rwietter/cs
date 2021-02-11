import { AnimatePresence, motion } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { campaigns } from '../data/campaigns.db.js';
import { events } from '../data/events.db.js';
import { GlobalStyle } from '../styles';
import { IconScrollIndicator } from '../stylesheets/animate';
import * as S from '../stylesheets/styles.js';

function Home({ location }) {
  const opacity = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      type: "tween",
      duration: 0.8,
    },
  }

  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const handleScroll = () => {
    window.scrollTo(0, 200)
  }

  return (
    <motion.div {...opacity}>
      <S.Wrapper>
        <GlobalStyle />
        <S.LayoutWapper>
          <Layout location={location} title={title}>
            <SEO
              title="Página inicial"
              keywords={[
                `blog`,
                `gatsby`,
                `javascript`,
                `react`,
                `computadores`,
                `sociedade`,
              ]}
            />
            <h1>
              Bem vindo(a){" "}
              <span role="img" aria-label="emoji">
                👋
              </span>
            </h1>
            <p>
              Bem vindo(a) ao blog JLM, curso de Sistemas de Informação
              (UFSM-FW).
            </p>
            <p>
              Visite nosso blog para ler as publicações sobre computação em
              geral e tecnologia em sociedade.
            </p>
            <Link to="/blog/">
              <Button marginTop="35px">Ir para o blog</Button>
            </Link>
          </Layout>
        </S.LayoutWapper>

        <S.PrimaryBackgroundImage />

        <IconScrollIndicator
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-down"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          stroke-width="7"
          stroke="#00abfb"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={handleScroll}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </IconScrollIndicator>

        <S.PolygonSection>
          <S.PlygonImage />
          <S.PolygonDescription>
            <S.PolygonCite>
              <motion.cite>
                Estamos inundando as pessoas com informações. Precisamos
                alimentá-las por meio de um processador. Um ser humano deve
                transformar informação em inteligência ou conhecimento. Temos a
                tendência de esquecer que nenhum computador jamais fará uma
                pergunta nova.
              </motion.cite>
              <S.PolygonCiteAuthor>- Grace Hopper</S.PolygonCiteAuthor>
            </S.PolygonCite>
          </S.PolygonDescription>
        </S.PolygonSection>

        <S.SectionEvents>
          <AnimatePresence>
            <h1>Eventos</h1>
          </AnimatePresence>
          <S.Events>
            {events[1] ? (
              events.map(event => (
                <motion.a
                  key={event.name}
                  href={event.link}
                  rel="noreferrer"
                  target="_blank"
                  style={{ height: "100%" }}
                  transition={{ type: "tween" }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <section className="grid-item">
                    <div className="grid-item_profile">
                      <img
                        width="100%"
                        height="100%"
                        src={event.img}
                        alt={event.name}
                      />
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
                </motion.a>
              ))
            ) : (
              <S.ThereAreNotEvents>
                Não há eventos no momento
              </S.ThereAreNotEvents>
            )}
          </S.Events>
        </S.SectionEvents>

        <S.SectionCampaigns>
          <motion.h1 className="campaigns__title" {...opacity}>
            Campanhas
          </motion.h1>
          <S.Events>
            {campaigns[1] ? (
              campaigns.map(event => (
                <motion.a
                  key={event.name}
                  href={event.name}
                  rel="noreferrer"
                  target="_blank"
                  style={{ height: "100%" }}
                  transition={{ type: "tween" }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <section className="grid-item">
                    <div className="grid-item_profile">
                      <img
                        width="100%"
                        height="100%"
                        src={event.img}
                        alt={event.name}
                      />
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
                </motion.a>
              ))
            ) : (
              <S.ThereAreNotEvents>
                Não há campanhas no momento
              </S.ThereAreNotEvents>
            )}
          </S.Events>
        </S.SectionCampaigns>

        <S.Footer>
          <div>
            <a
              className="facebook"
              href="https://www.facebook.com/ufsmfrederico/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="footer__social-icon footer__social-facebook"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#9baacb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/ufsmfw/?hl=pt-br"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="footer__social-icon footer__social-instagram"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#9baacb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              className="twitter"
              href="https://twitter.com/ufsmfw"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="footer__social-icon footer__social-twitter"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#9baacb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
            <a
              className="site"
              href="https://www.ufsm.br/unidades-universitarias/frederico-westphalen/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                className="footer__social-icon footer__social-site"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#9baacb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="4" />
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
              </svg>
            </a>
          </div>

          <hr className="footer__separator" />

          <div className="footer footer-copyright-wrapper">
            <span className="footer-copyright__year">
              © {new Date().getFullYear()}
            </span>
            <span>&nbsp; Copyright &nbsp;</span>
            <a
              href="https://www.ufsm.br/cursos/graduacao/frederico-westphalen/sistemas-de-informacao/"
              rel="noreferrer"
              target="_blank"
            >
              JLM.
            </a>
          </div>
          <span>&nbsp;Todos os direitos reservados</span>
        </S.Footer>
      </S.Wrapper>
    </motion.div>
  )
}

export default Home
