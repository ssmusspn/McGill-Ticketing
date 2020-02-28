import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const TummiesPage = () => {
  const { isAuthenticated } = useAuth()

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

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_tummies_bracket: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "tummies_bracket" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              art_tummies_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "tummies_meme" }
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
            <Section id="tummies">
              <Container>
                <h1>Tummies - Zero Suit Samus</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_tummies_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>8:00PM - 11:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> Right elevated platform.
                    </p>
                    <p>
                      <strong>Players: </strong>1 guy + 1 girl per team.
                    </p>
                    <p>
                      <strong>Beverages: </strong>Gluten free alcoholic
                      beverages are available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>Samus took her suit off and so should you. #tarpsoff</p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>
                    Bounce the ball off your teammates tummy and into their
                    cups. Once the ball is sunken, yell tummies and pass the cup
                    to your opponent.
                  </li>
                  <li>
                    Cups that your team receives from your opponents must be
                    drank and flipped before you may continue playing.
                  </li>
                  <li>
                    The cup in the middle (water cup) must be scored on a double
                    bounce.
                  </li>
                </ul>
                <h2>Bracket</h2>
                <Img fluid={data.art_tummies_bracket.childImageSharp.fluid} />
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Place</th>
                      <th title="Field #2">Points</th>
                      <th title="Field #3">Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td align="right">1500</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td align="right">1250</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td align="right">1100</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td align="right">950</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">650</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">275</td>
                      <td> </td>
                    </tr>
                  </tbody>
                </table>
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

export default TummiesPage
