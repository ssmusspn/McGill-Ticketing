import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const LimboPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_limbo_bracket: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "limbo_bracket" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_limbo_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "limbo_meme" }
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
        <Section id="limbo">
          <Container>
            <h1>Limbo - Wii Fit</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_limbo_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>12:00PM - 2:30PM
                </p>
                <p>
                  <strong>Location: </strong> ADPhi (ΑΔΦ) Memorial Hall
                </p>
                <p>
                  <strong>Players: </strong>1 guy + 1 girl per team.
                </p>
              </div>
            </Grid>
            <br />
            <p>
              Show off your fitness skills and your flexibility. When it comes
              to limbo, you're either good at it or you aren't.
            </p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>
                All contestants must attempt to go under the bar with their
                backs facing toward the floor. When passing under the bar,
                players must bend backwards.
              </li>

              <li>
                Each participant gets one shot of fireball, every two rounds.
                Participants get two chances per turn to make it under the limbo
                stick and remain standing on the other end. If both participants
                make it through, they both attempt again at a lower height. If
                neither participant can make it through at the given level, it
                is settled by a chug off.
              </li>
            </ul>
            <h2>Brackets</h2>
            <Img fluid={data.art_limbo_bracket.childImageSharp.fluid} />
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

export default LimboPage

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
