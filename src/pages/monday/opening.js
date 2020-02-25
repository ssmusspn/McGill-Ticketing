import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const OpeningPage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_opening_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "opening_meme" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          `}
          render={data => (
            <Section id="teams">
              <Container>
                <h1>Opening - World 1-1</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_opening_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>7:00PM - 1:00AM
                    </p>
                    <p>
                      <strong>Location: </strong>
                      <a href="https://goo.gl/maps/mbAfZh3XoTaevC8t9">
                        Foufounes Electriques
                      </a>
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone
                    </p>
                    <p>
                      <strong>Drinks: </strong>$8 Pitchers
                    </p>
                    <p>
                      <strong>Coat Check: </strong>$2.00
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  <strong>Welcome to Factendo!</strong> Word on the street is
                  that Peach has a new man... Apparently she's wheeling some
                  exchange student named Bowser? My sources tell me he's got a
                  sub 1 chug... I guess we just might need to see this one for
                  ourselves...
                </p>
                <p>
                  Its the beginning of it all. Opening ceremonies is upon us.
                  Create a new player and come join us down at Foufounes
                  Electriques for TIME TRIALS, PONG SEEDING AND 3-MAN.
                </p>
                <br />
                <h2>Activities</h2>
                <ul>
                  <li>
                    <StyledLink to="/monday/timetrials">Time Trials</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/monday/pongseeding">
                      Pong Seeding
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/monday/threeman">3 Man</StyledLink>
                  </li>
                </ul>
              </Container>
            </Section>
          )}
        />
        <Footer />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Navbar />
        <PleaseLogin />
        <Footer />
      </Layout>
    )
  }
}

export default OpeningPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  a {
    color: ${props => props.theme.color.primary};
    font-style: italic;
  }

  p {
    font-size: 28px;
    font-color: black;
  }

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.color.primary};
  font-style: italic;
`
