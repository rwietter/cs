import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p style={{ margin: 0 }}>
              Escrito por <Signature>{author}</Signature>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "assets/ufsm.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${rhythm(1)};
`
const Signature = styled.strong`
  box-shadow: inset 0 -5px rgba(0, 194, 255, 0.5);
`
export default Bio
