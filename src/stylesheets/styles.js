import { m as motion } from 'framer-motion';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.7fr minmax(auto, 0.5fr) auto auto minmax(auto, 0.5fr);
  gap: 10px;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  p {
    font-size: clamp(0.8rem, 3vw, 1.5rem);
  }
`

export const LayoutWapper = styled.div`
  z-index: 1;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  justify-self: flex-start;
  align-self: flex-start;
  max-width: 900px;
  @media (min-width: 720px) {
    justify-self: flex-start;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    max-width: 70%;
  }
`

export const PrimaryBackgroundImage = styled.svg`
  background-image: url(${require("../data/home.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  @media (min-width: 720px) {
    background-size: cover;
    background-repeat: no-repeat;
    width: 70%;
    height: 70vh;
    right: 0;
    position: absolute;
  }
`

export const PolygonSecation = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-content: center;
  place-items: center;

  clip-path: polygon(0 0, 100% 15%, 100% 89%, 0 100%);
  background-color: #ffffff;
  background-attachment: fixed;
  background-image: linear-gradient(145.64deg, #00e0ff 9.67%, #0047ff 107.49%);

  position: relative;
  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const PlygonImage = styled(motion.svg)`
  display: none;
  background-image: url(${require("../data/assets/Virtual_office_girl.svg")});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
  @media (min-width: 720px) {
    grid-column: 1 / 2;
    display: block;
    margin: 0 auto;
  }
  @media (min-width: 350px) {
    width: 90%;
    height: 90%;
  }
`

export const PolygonDescription = styled.section`
  grid-column: 2/3;
  justify-content: center;
  align-items: flex-start;
  max-width: 90%;
  flex-flow: column;
  overflow: hidden;
  h1 {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
  p {
    font-size: clamp(0.6rem, 2vw, 0.8rem);
  }
  @media (min-width: 720px) {
    display: flex;
  }
  @media (min-width: 1100px) {
    max-width: 70%;
  }
`

export const SectionEvents = styled.section`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    box-shadow: inset 0 -15px 0 rgba(0, 194, 255, 0.6);
  }
`

export const Events = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 8px;
  height: 100%;

  .grid-item {
    width: 100%;
    height: auto;
    background-color: #fefefe;
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 20px;
    transition: all 0.4s ease;
    white-space: pre-wrap;
    height: 100%;
    font-family: "Montserrat", "Courier New", Courier, monospace;
    .grid-item__description {
      text-align: justify;
      p {
        font-size: clamp(14px, 2vw, 0.7rem);
        margin: 0;
        line-height: 2;
      }
      p:first-child {
        font-size: clamp(14px, 2vw, 0.8rem);
        font-weight: 500;
        padding: 0 0 20px 0;
        line-height: 1.5;
        text-overflow: ellipsis;
        @media (min-width: 600px) {
          line-height: 1.5;
        }
      }
      p span {
        font-weight: 600;
      }
    }
    &:hover {
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
  }

  .grid-item_profile {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-items: flex-end;
    height: 5rem;

    h2 {
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: 700;
      font-family: "Montserrat", "Courier New", Courier, monospace;
      padding: 0 0 10px 20px;
    }
    img {
      width: 100%;
      max-width: 3rem;
      height: 3rem;
      border-radius: 50%;
      box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: ${rhythm(1)} ${rhythm(1)} 0 ${rhythm(1)};
    height: 100%;
  }
`

export const SectionCampaigns = styled.section`
  padding-top: 3rem;
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
  h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    box-shadow: inset 0 -15px 0 rgba(0, 194, 255, 0.6);
  }
`

export const Footer = styled.footer`
  grid-row: 5 / 6;
  grid-column: 1 / 3;
  width: 100%;
  overflow: hidden;
  background-image: url(${require("../data/waveGray.svg")});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  font-size: clamp(13px, 2vw, 0.6rem);
  flex-flow: column;
  padding-top: ${rhythm(6.5)};
  font-family: "Montserrat", "Courier New", Courier, monospace;

  .footer__container {
    padding-top: ${rhythm(3)};
  }

  a.twitter,
  a.facebook,
  a.instagram,
  a.site {
    margin-right: ${rhythm(0.7)};
    box-shadow: none;
  }

  a.site {
    margin-right: unset;
  }

  .footer-copyright-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
  }

  .footer-copyright__year {
    font-size: clamp(13px, 2vw, 0.6rem);
  }

  .footer__separator {
    height: 1px;
    background: #e3e5ea;
    margin-top: ${rhythm(0.5)};
    width: 100%;
    max-width: 90%;
  }

  .footer__social-icon {
    cursor: pointer;
    transition: stroke 0.3s ease;
  }

  .footer__social-twitter:hover {
    stroke: #55acee;
  }
  .footer__social-facebook:hover {
    stroke: #0084ff;
  }
  .footer__social-instagram:hover {
    stroke: #e4405f;
  }
  .footer__social-site:hover {
    stroke: #0077b5;
  }
`
