import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { Table } from "reactstrap"

const BoatRacePage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_boatrace_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "boatrace_meme" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_boatraces_bracket: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "boatraces_bracket" }
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
        <Section id="boatraces">
          <Container>
            <h1>BOAT Races - Rainbow Road: Grand Prix</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_boatrace_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>8:00PM - 11:00PM
                </p>
                <p>
                  <strong>Location: </strong> Café Campus Pits
                </p>
                <p>
                  <strong>Players: </strong>10 people from each team, minimum 4
                  girls + 1 PBH +1 Tapper
                </p>
              </div>
            </Grid>
            <br />
            <p>
              At this point this event doesn't even need an introduction because
              this might be only thing we've learned during our time at McGill.
              Prepare yourselves to (Boat) Race down everyones favorite Rainbow
              Road and make sure you don't get hit by those pesky blue shells on
              your way.
            </p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>
                2 regulation beers per person per round. Race there and back -
                chugger 1 drinks 1 beer, chugger 2 then drinks, etc.
              </li>
            </ul>
            <p>Penalties are called on</p>
            <ul>
              <li>
                DOUBLE MAJORS (10 secs) - False starts, not putting the cup down
                after drinking (e.g. crushing the cup, throwing), beer left in
                cup
              </li>
              <li>MAJORS (5 secs) - Dripping beer off face</li>
              <li>MINORS (2 secs) - Small spills, liquid on face</li>
            </ul>
            <h2>Bracket</h2>
            <Img fluid={data.art_boatraces_bracket.childImageSharp.fluid} />
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Place</th>
                  <th title="Field #2">Points</th>
                  <th title="Field #3">Team</th>
                  <th title="Field #4">Raw Time</th>
                  <th title="Field #5">Double Majors</th>
                  <th title="Field #6">Majors</th>
                  <th title="Field #7">Minors</th>
                  <th title="Field #8">Total Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td align="right">10000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td align="right">8500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td align="right">7500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td align="right">6250</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">4500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">4500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">4500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">4500</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">2000</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
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

export default BoatRacePage

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
