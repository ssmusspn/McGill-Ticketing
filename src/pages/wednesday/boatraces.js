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

const BoatRacePage = () => {
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
                      <strong>Time: </strong>7:00PM - 11:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> Café Campus Pits
                    </p>
                    <p>
                      <strong>Coat Check: </strong>$2.00
                    </p>
                    <p>
                      <strong>Drinks: </strong>$13.00 Pitchers
                    </p>
                    <p>
                      <strong>Players: </strong>10 people from each team,
                      minimum 4 girls + 1 PBH +1 Tapper
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  At this point this event doesn't even need an introduction
                  because this might be only thing we've learned during our time
                  at McGill. Prepare yourselves to (Boat) Race down everyones
                  favorite Rainbow Road and make sure you don't get hit by those
                  pesky blue shells on your way.
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
                    DOUBLE MAJORS (10 secs) - False starts (during countdown),
                    crushing the cup, throwing the cup, beer left in cup
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
                <h2>Bracket</h2>
                <Img fluid={data.art_boatraces_bracket.childImageSharp.fluid} />
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Place</th>
                      <th title="Field #3">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td>1</td>
                      <td align="right">10000</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>2</td>
                      <td align="right">8500</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>3</td>
                      <td align="right">7500</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>4</td>
                      <td align="right">6250</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>5-8</td>
                      <td align="right">4500</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>5-8</td>
                      <td align="right">4500</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>5-8</td>
                      <td align="right">4500</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>5-8</td>
                      <td align="right">4500</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>9-16</td>
                      <td align="right">2000</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Results</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Raw Time</th>
                      <th title="Field #3">Minors</th>
                      <th title="Field #4">Majors</th>
                      <th title="Field #5">Double Majors</th>
                      <th title="Field #6">Total Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td>0:01:11</td>
                      <td align="right">5</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td>01:31.40</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>02:40.0</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td align="right">20</td>
                      <td>06:00.00</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td>01:43.72</td>
                      <td align="right">4</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td>02:01.72</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>01:34.97</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:40.97</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>01:32.81</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td align="right">1</td>
                      <td>01:44.81</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>01:05.94</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">10</td>
                      <td>02:49.94</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>01:26.03</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:26.03</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>01:47.69</td>
                      <td align="right">0</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td>02:02.69</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>01:15.72</td>
                      <td align="right">0</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>01:20.72</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>02:06.78</td>
                      <td align="right">7</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>02:25.78</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>01:37.85</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:43.85</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td>01:46.03</td>
                      <td align="right">3</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td>02:07.03</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>01:22.19</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:22.19</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>01:47.16</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:51.16</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>01:23.25</td>
                      <td align="right">0</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>01:28.25</td>
                    </tr>
                    <tr>
                      <td>Sci 1</td>
                      <td>01:30.97</td>
                      <td align="right">4</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:38.97</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>01:14.81</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td align="right">1</td>
                      <td>01:26.81</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>01:24.18</td>
                      <td align="right">2</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>01:33.18</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>01:13.21</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:19.21</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>01:13.03</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:17.03</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>01:18.78</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:24.78</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>01:32.03</td>
                      <td align="right">7</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:46.03</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>01:19.35</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td>01:26.35</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>01:26.87</td>
                      <td align="right">4</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:34.87</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>01:12.41</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:14.41</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>01:18.47</td>
                      <td align="right">5</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:28.47</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>01:17.63</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:17.63</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>01:16.69</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:20.69</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>01:24.31</td>
                      <td align="right">6</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:36.31</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>01:28.07</td>
                      <td align="right">2</td>
                      <td align="right">1</td>
                      <td align="right">1</td>
                      <td>01:47.07</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>01:17.68</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:21.68</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>01:19.16</td>
                      <td align="right">1</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>01:21.16</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>00:34.34</td>
                      <td align="right">2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>00:38.34</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>00:36.75</td>
                      <td align="right">3</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                      <td>00:42.75</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Spirit Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td align="right">1000</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td align="right">1000</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td align="right">1000</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td align="right">1000</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td align="right">600</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td align="right">600</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td align="right">600</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td align="right">600</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
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

export default BoatRacePage
