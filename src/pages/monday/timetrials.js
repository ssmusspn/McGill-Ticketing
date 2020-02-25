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

const TimeTrialsPage = () => {
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

  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_timetrials_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "timetrials_meme" }
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
                <h1>Time Trials - Rainbow Road Time Trials</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_timetrials_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>7:00PM - 9:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> Foufounes Pits
                    </p>
                    <p>
                      <strong>Players: </strong>10 people from each team,
                      minimum 4 girls + 1 PBH +1 Tapper
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  We came, we saw, we raced. Come on down to Time Trials to
                  scout out your competition for the Grand Prix coming up later
                  this week!
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>
                    2 regulation beers per person per round. Race there and back
                    - chugger 1 drinks 1 beer, chugger 2 then drinks, etc.
                  </li>
                  <li>
                    Penalties are called on
                    <ul>
                      <li>MINORS (2 secs) - Small spills, liquid on face</li>
                      <li>MAJORS (5 secs) - Dripping beer off face</li>
                      <li>
                        DOUBLE MAJORS (10 secs) - False starts, not putting the
                        cup down after drinking (e.g. crushing the cup,
                        throwing), beer left in cup
                      </li>
                    </ul>
                  </li>
                </ul>
                <h2>Schedule</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Time</th>
                      <th title="Field #2">Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>7:00 PM</td>
                      <td>Arts 1, Law</td>
                    </tr>
                    <tr>
                      <td>7:15 PM</td>
                      <td>Arts 4, Engineering</td>
                    </tr>
                    <tr>
                      <td>7:30 PM</td>
                      <td>Management 1, Music</td>
                    </tr>
                    <tr>
                      <td>7:45 PM</td>
                      <td>Arts 5, Science 1</td>
                    </tr>
                    <tr>
                      <td>8:00 PM</td>
                      <td>Arts 3, Science 2</td>
                    </tr>
                    <tr>
                      <td>8:15 PM</td>
                      <td>Management 2, PTOT</td>
                    </tr>
                    <tr>
                      <td>8:30 PM</td>
                      <td>Arts 2, Education 2</td>
                    </tr>
                    <tr>
                      <td>8:45 PM</td>
                      <td>Education 1, Medicine</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <tbody>
                    <tr>
                      <th>Position</th>
                      <th>Points</th>
                      <th>Team</th>
                      <th>Raw Time</th>
                      <th>Double Majors</th>
                      <th>Majors</th>
                      <th>Minors</th>
                      <th>Total Time</th>
                    </tr>
                    <tr>
                      <td align="right">01</td>
                      <td align="right">2000</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">02</td>
                      <td align="right">1700</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">03</td>
                      <td align="right">1500</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">04</td>
                      <td align="right">1250</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">05</td>
                      <td align="right">1100</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">06</td>
                      <td align="right">950</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">07</td>
                      <td align="right">800</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">08</td>
                      <td align="right">700</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">09</td>
                      <td align="right">600</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">10</td>
                      <td align="right">500</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">11</td>
                      <td align="right">450</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">12</td>
                      <td align="right">400</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">13</td>
                      <td align="right">350</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">14</td>
                      <td align="right">300</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">15</td>
                      <td align="right">250</td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">16</td>
                      <td align="right">200</td>
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

export default TimeTrialsPage
