import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`

  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          width: "100%",
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {location.pathname === rootPath || location.pathname === blogPath ? (
            <Title
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  fontSize: "clamp(32px, 5vw, 6rem)",
                }}
                to={location.pathname === blogPath ? `/blog/` : `/`}
              >
                {title}
              </Link>
            </Title>
          ) : (
            <h3
              style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/blog/`}
              >
                {title}
              </Link>
            </h3>
          )}
        </header>
        <main>{children}</main>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  header h1 {
    @media (min-width: 400px){
      line-height: 1;
    }
  }
`

const Title = styled.h1`
  margin-bottom: rhythm(1.5);
  margin-top: 0;
  @media (max-width:357px) {
    line-height: 1
  }
`

export default Layout
