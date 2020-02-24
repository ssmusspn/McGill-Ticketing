import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const PongPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_pong_bracket: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "pong_bracket" }
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
        <Section id="pong">
          <Container>
            <h1>Beer Pong - Duck Hunt</h1>
            <br />
            <Grid>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>10:00AM - 12:00PM
                </p>
                <p>
                  <strong>Location: </strong> AdPhi Library
                </p>
                <p>
                  <strong>Players: </strong>1 guy + 1 girl per team.
                </p>
              </div>
            </Grid>
            <br />
            <p>A classic drinking game... thats all we have to say</p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>10 cups</li>

              <li>
                Higher seed goes first (bracket will be posted)
                <ul>
                  <li>
                    2 realigns, gentleman's will count as one of your realigns
                  </li>

                  <li>
                    One island each per turn, if island is made it’s 2 cups, if
                    any other cup is made it does not count
                  </li>

                  <li>Same cup hit is 3 cups eliminated and balls back</li>

                  <li>
                    If one of your cups is hit you must drink it before your
                    next shot
                  </li>
                </ul>
              </li>

              <li>
                Redemption:
                <ul>
                  <li>Shoot until you miss with unlimited reracks</li>

                  <li>
                    If both players miss before sinking all cups, it’s game over
                  </li>

                  <li>If all cups are sunk, proceed with 3 cup game</li>

                  <li>
                    10 minute time limit, whoever is winning when time is up
                    moves on
                  </li>
                </ul>
              </li>
            </ul>
            <h2>Brackets</h2>
            <Img fluid={data.art_pong_bracket.childImageSharp.fluid} />
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Place</th>
                  <th title="Field #2">Points</th>
                  <th title="Field #3">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td align="right">1000</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td align="right">850</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td align="right">750</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td align="right">625</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">450</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">450</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">450</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">450</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">200</td>
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

export default PongPage

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
