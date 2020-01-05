import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"
import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"

const Login = () => {
  const { isAuthenticated, login, logout, isAuthenticating } = useAuth()

  if (isAuthenticated()) {
    return (
      <>
        <Link onClick={logout}>Logout</Link>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  } else {
    return (
      <>
        <Link onClick={login}>Login</Link>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  }
}

const Header = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <StaticQuery
      query={graphql`
        query {
          art_build: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "build" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <HeaderWrapper>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.art_build.childImageSharp.fluid} />
              </Art>
              <Text>
                <h1>
                  Hello
                  <br />
                  <b>{isAuthenticated() ? user.name : "user"}</b>
                </h1>
                <br />
                <p>
                  <Login />
                </p>
              </Text>
            </Grid>
          </Container>
        </HeaderWrapper>
      )}
    />
  )
}

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`

export default Header
