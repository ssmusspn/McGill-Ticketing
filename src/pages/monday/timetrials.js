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
                    <p>
                      <strong>Beverages: </strong>Only beer is available
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
                <p>
                  2 regulation beers per person per round. Race there and back -
                  chugger 1 drinks 1 beer, chugger 2 then drinks, etc.
                </p>
                <p>
                  <strong>Penalties are called on</strong>
                </p>
                <ul>
                  <li>
                    DOUBLE MAJORS (10 secs) - False starts, crushing the cup,
                    throwing the cup, beer left in cup
                  </li>
                  <li>MAJORS (5 secs) - Dripping beer off face</li>
                  <li>MINORS (2 secs) - Small spills, liquid on face</li>
                </ul>
                <p>
                  <strong>False Starts:</strong>
                </p>

                <ul>
                  <li>Cup must touch the table before the next person goes</li>

                  <li>A false start due to early tapping is a Minor</li>

                  <li>A false start on the countdown is a Double Major</li>

                  <li>
                    The timer, not the sign holders, are responsible for the
                    calling of false starts
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
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Place</th>
                      <th title="Field #3">Raw Time</th>
                      <th title="Field #4">Minors</th>
                      <th title="Field #5">Majors</th>
                      <th title="Field #6">Double Majors</th>
                      <th title="Field #7">Total Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td align="right">1</td>
                      <td>1:04.97</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>1:08.97</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td align="right">2</td>
                      <td>1:12.25</td>
                      <td align="right">4</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td>1:35.25</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td align="right">3</td>
                      <td>1:26.21</td>
                      <td align="right">5</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>1:36.21</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td align="right">4</td>
                      <td>1:26.87</td>
                      <td align="right">4</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>1:39.87</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td align="right">5</td>
                      <td>1:25.07</td>
                      <td align="right">2</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td>1:39.97</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td align="right">6</td>
                      <td>1:33.22</td>
                      <td align="right">5</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>1:43.22</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td align="right">7</td>
                      <td>1:27.06</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td>1:44.06</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td align="right">8</td>
                      <td>1:42.53</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>1:46.53</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td align="right">9</td>
                      <td>1:34.25</td>
                      <td align="right">8</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>1:55.25</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td align="right">10</td>
                      <td>1:56.90</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>2:03.90</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td align="right">11</td>
                      <td>1:45.49</td>
                      <td align="right">5</td>
                      <td align="right">0</td>
                      <td align="right">1</td>
                      <td>2:05.59</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td align="right">12</td>
                      <td>2:04.66</td>
                      <td align="right">4</td>
                      <td align="right">4</td>
                      <td align="right">0</td>
                      <td>2:32.66</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td align="right">13</td>
                      <td>1:54.07</td>
                      <td align="right">3</td>
                      <td align="right">1</td>
                      <td align="right">3</td>
                      <td>2:35.07</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td align="right">14</td>
                      <td>2:01.69</td>
                      <td align="right">5</td>
                      <td align="right">3</td>
                      <td align="right">2</td>
                      <td>2:46.69</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td align="right">15</td>
                      <td>2:06.03</td>
                      <td align="right">3</td>
                      <td align="right">2</td>
                      <td align="right">4</td>
                      <td>3:02.03</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td align="right">16</td>
                      <td>2:48.94</td>
                      <td align="right">10</td>
                      <td align="right">3</td>
                      <td align="right">4</td>
                      <td>4:03.94</td>
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
