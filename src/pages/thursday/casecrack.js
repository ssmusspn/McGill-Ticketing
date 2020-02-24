import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const CaseCrackPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_casecrack_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "casecrack_meme" }
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
        <Section id="casecrack">
          <Container>
            <h1>Case Crack - Detective Pikachu</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_casecrack_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>10:00AM - 3:30PM
                </p>
                <p>
                  <strong>Location: </strong> Petit Campus
                </p>
                <p>
                  <strong>Players: </strong>Up to 5 participants per team.
                  Minimum 2 girls.
                </p>
              </div>
            </Grid>
            <br />
            <p>
              Just because Faculty Olympics isn’t run by the MUS doesn’t mean we
              can’t get sharky. The best way to prepare for that case interview
              is to train in the mountains, or in this case: train intoxicated.
              In this game of cunning, a team of up to 5 must finish 4 pitchers
              of beer while creating a fun and flirty proposal on a poster board
              that you’ll present to committee. Emphasis on the fun but mostly
              on the flirty ;). Best proposal = most points!
            </p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>
                Team <em>must</em> finish the 4 pitchers during the hour.
              </li>

              <li>
                Team will present to committee in hidden side area of petit
                campus at the conclusion of the hour
              </li>

              <li>
                You <em>may not</em> puke or pull trig
              </li>
            </ul>
            <h2>Schedule</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Start Time</th>
                  <th title="Field #2">Team</th>
                  <th title="Field #3">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:15 AM</td>
                  <td>Education 2</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>10:30 AM</td>
                  <td>Arts 5</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>10:45 AM</td>
                  <td>Engineering</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>11:00 AM</td>
                  <td>PTOT</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>11:15 AM</td>
                  <td>Education 1</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>11:30 AM</td>
                  <td>Music</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>11:45 AM</td>
                  <td>Science 1</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>12:00 PM</td>
                  <td>Arts 2</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>12:15 PM</td>
                  <td>Law</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>12:30 PM</td>
                  <td>Arts 4</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>12:45 PM</td>
                  <td>Medicine</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>1:00 PM</td>
                  <td>Science 2</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>1:15 PM</td>
                  <td>Management 2</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>Arts 3</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>1:45 PM</td>
                  <td>Management 1</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>Arts 1</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Tier</th>
                  <th title="Field #2">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="right">1</td>
                  <td align="right">1000</td>
                </tr>
                <tr>
                  <td align="right">2</td>
                  <td align="right">600</td>
                </tr>
                <tr>
                  <td align="right">3</td>
                  <td align="right">350</td>
                </tr>
                <tr>
                  <td align="right">4</td>
                  <td align="right">200</td>
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

export default CaseCrackPage

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
