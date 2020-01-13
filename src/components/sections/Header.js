import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"
import { Container } from "@components/global"
import Checkout from "../common/Checkout"

const Header = () => {
  // const { isAuthenticated, user } = useAuth()

  return (
    <StaticQuery
      query={graphql`
        query {
          art_build: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sspn-logo" }
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
                  Fac-O 2020
                  <br />
                  Hype Night
                </h1>
                {/* <p>
                  Anyone who is added to the Students' Society Programming
                  Network Involvement Restriction List will be barred from all
                  future Students' Society Programming Network events and this
                  barring can be extended to all Faculty social events
                  including: BdA, 4à7, Blues Pub, Carnival, Hype Week, Faculty
                  Graduation Balls, and others. Your information may be shared
                  with other undergraduate societies in accordance with the
                  Interfaculty Involvement Restriction Policy.
                </p> */}
                <br />
                <form>
                  <input
                    id="IRPcheckbox"
                    type="checkbox"
                    name="IRPcheckbox"
                    value="IRPcheckbox"
                  />
                  {
                    " I agree with the terms of the involvement restriction policy"
                  }
                </form>
                <br />
                <p>
                  <Checkout />
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
  h1 {
    color: ${props => props.theme.color.white.regular};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.color.accent};
`

const Login = () => {
  const { isAuthenticated, login, logout, isAuthenticating } = useAuth()

  if (isAuthenticated()) {
    return (
      <>
        <StyledLink onClick={logout}>Logout</StyledLink>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  } else {
    return (
      <>
        <StyledLink onClick={login}>Purchase Hype Night Ticket</StyledLink>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  }
}

export default Header
