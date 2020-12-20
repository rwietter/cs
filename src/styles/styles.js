import { m as motion } from 'framer-motion';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr minmax(auto, 1fr) 0.5fr;
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

export const Container = styled.div`
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

export const Image = styled.svg`
  background-image: url(${require("../data/home.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`

export const Background = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: end;
  place-content: end;

  position: relative;

  max-width: 100%;
  max-height: 100%;
  color: #fff;
  clip-path: polygon(0 0, 100% 15%, 100% 89%, 0 100%);
  background-color: #ffffff;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const BackgroundText = styled.section`
  display: none;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
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
`

export const SectionEvents = styled.section`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
  }
`

export const Events = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 20rem));
  grid-template-rows: repeat(auto-fill, minmax(13rem, 1fr));
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: ${rhythm(1)} ${rhythm(1)} 0 ${rhythm(1)};

  .grid-item {
    width: 100%;
    height: 100%;
    background-color: #fefefe;
    box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 20px;
    font-family: "Montserrat", "Courier New", Courier, monospace;
    .grid-item__description {
      p {
        font-size: clamp(0.6rem, 2vw, 0.7rem);
        margin: 0;
        line-height: 2;
      }
      p:first-child {
        font-size: clamp(0.6rem, 2vw, 0.9rem);
        font-weight: 600;
        padding: 0 0 20px 0;
        line-height: 1.5;
        @media (min-width: 600px) {
          line-height: 1.5;
        }
      }
      p span {
        font-weight: 600;
      }
    }
  }

  .grid-item_profile {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-items: flex-end;
    height: 5rem;

    h2 {
      font-size: clamp(1rem, 2vw, 1.5rem);
      font-weight: 700;
      font-family: "Montserrat", "Courier New", Courier, monospace;
      padding: 0 0 10px 20px;
    }
    img {
      width: 100%;
      max-width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  @media (min-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
  }
`

export const Footer = styled.footer`
  display: block;
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  width: 100%;
  overflow: hidden;
  background-image: url(${require("../data/waveGray.svg")});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: nowrap;
  font-size: clamp(0.7rem, 3vw, 1rem);
  padding-bottom: ${rhythm(2)};
`

export const Illustration = styled(motion.svg)`
  grid-column: 1 / 3;

  background-image: url(${require("../data/Blogging - Colour/blogging.svg")});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  background-position: 100% 80%;

  @media (min-width: 720px) {
    background-position: 0 100%;
    grid-column: 1 / 2;
  }
`
