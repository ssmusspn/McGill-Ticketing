import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const ThreeManPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_3man_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "3man_meme" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_3man_rules: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "3man_rules" }
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
        <Section id="timetrials">
          <Container>
            <h1>3 Man - Shy Guy Shuffle</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_3man_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>9:30PM - 11:00PM
                </p>
                <p>
                  <strong>Location: </strong> Foufounes Pits
                </p>
                <p>
                  <strong>Players: </strong>Everyone!
                </p>
              </div>
            </Grid>
            <br />
            <p>
              <strong>HARM REDUCTION </strong>Although pitchers are for sale at
              this venue, 3-man starts later during the night and involves a lot
              of alcohol consumption, please know your limit and play within it.{" "}
            </p>
            <br />
            <p>
              Who are these masked rascals that cause so much trouble for Yoshi
              and Mario? Seems like Shy Guys are always around, whether your
              driving a kart, hitting a tennis ball or playing 3-man!
            </p>
            <p>
              A game of skill, cunning, and luck. Nobody really knows where the
              3 men came from, but they brought with them two giant die. Roll
              the dice, check the cheat-sheet, receive beers, pass it on,
              repeat.
            </p>
            <h2 id="rules">Rules</h2>
            <ol>
              <li>
                <p>Everyone is in a circle</p>
              </li>

              <li>
                <p>
                  Determine the 3-Man: the first team to roll a three is the
                  first 3-Man
                </p>
              </li>

              <li>
                <p>
                  The team to the left of 3-Man goes first, each team following
                  in a clockwise rotation. Each team rolls both dice, acting in
                  accordance with the cheat sheet
                </p>

                <p>
                  If doubles are rolled, the team passes the dice to a team of
                  their choosing. That team will receive x2 as much beer as the
                  total of their roll. All rules are recursiveIf the 3-Man ever
                  rolls a three, they then select a new team to be the 3-Man{" "}
                </p>
              </li>

              <li>
                <p>Every beer received is equal to one point</p>
              </li>
            </ol>

            <p>The team with the lowest score at the end of the game wins</p>
            <Img fluid={data.art_3man_rules.childImageSharp.fluid} />
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Tier</th>
                  <th title="Field #2">Points</th>
                  <th title="Field #3">Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="right">1</td>
                  <td align="right">1000</td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">2</td>
                  <td align="right">600</td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">3</td>
                  <td align="right">350</td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">4</td>
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

export default ThreeManPage

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
