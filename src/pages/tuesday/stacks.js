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

const StacksPage = () => {
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
              art_stacks_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "stacks_meme" }
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
            <Section id="stacks">
              <Container>
                <h1>Stacks - Tetris</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_stacks_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>8:00PM - 9:30PM
                    </p>
                    <p>
                      <strong>Location: </strong>Mezzanine
                    </p>
                    <p>
                      <strong>Players: </strong>3 people from each team, minimum
                      1 girl.
                    </p>
                    <p>
                      <strong>Beverages: </strong>Only beer is available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>Stacks on stacks on stacks on stacks</p>
                <p>
                  Finish ten (10) regulation sized beers, and stack them in a
                  pyramid as quickly as possible.
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>
                    Teams may clean the stacking area before they start. Teams
                    may only use a shirt to stack cups on top of, if desired.
                    The game starts after a countdown from ten (10).
                  </li>
                  <li>
                    If a player spills it will be a minor, major, or double
                    major to be determined by a committee member. If a player
                    pukes into one of their cups it is a double major. Puking
                    into a puke bag is allowed.
                  </li>
                  <li>3 players total</li>
                  <li>Minimum 1 girl</li>
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
                      <td>8:00 PM</td>
                      <td>Arts 1, Law</td>
                    </tr>
                    <tr>
                      <td>8:10 PM</td>
                      <td>Arts 2, Science 1</td>
                    </tr>
                    <tr>
                      <td>8:20 PM</td>
                      <td>Management 1, Management 2</td>
                    </tr>
                    <tr>
                      <td>8:30 PM</td>
                      <td>Education 2, Music</td>
                    </tr>
                    <tr>
                      <td>8:40 PM</td>
                      <td>Arts 4, Science 2</td>
                    </tr>
                    <tr>
                      <td>8:50 PM</td>
                      <td>Education 1, PTOT</td>
                    </tr>
                    <tr>
                      <td>9:00 PM</td>
                      <td>Arts 3, Engineering</td>
                    </tr>
                    <tr>
                      <td>9:10 PM</td>
                      <td>Arts 5, Medicine</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Time</th>
                      <th title="Field #3">Place</th>
                      <th title="Field #4">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td>0:25.27</td>
                      <td align="right">1</td>
                      <td align="right">1500</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>0:28.27</td>
                      <td align="right">2</td>
                      <td align="right">1250</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td>0:35.8</td>
                      <td align="right">3</td>
                      <td align="right">1100</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>0:38.13</td>
                      <td align="right">4</td>
                      <td align="right">950</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td>0:38.78</td>
                      <td align="right">5</td>
                      <td align="right">825</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>0:39.41</td>
                      <td align="right">6</td>
                      <td align="right">700</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>0:43.23</td>
                      <td align="right">7</td>
                      <td align="right">600</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>0:45.37</td>
                      <td align="right">8</td>
                      <td align="right">525</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>0:47.19</td>
                      <td align="right">9</td>
                      <td align="right">450</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>0:57.94</td>
                      <td align="right">10</td>
                      <td align="right">375</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td>1:00.00</td>
                      <td align="right">11</td>
                      <td align="right">325</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>1:08.00</td>
                      <td align="right">12</td>
                      <td align="right">275</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>1:13.00</td>
                      <td align="right">13</td>
                      <td align="right">250</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>1:21.75</td>
                      <td align="right">14</td>
                      <td align="right">225</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td>1:31.00</td>
                      <td align="right">15</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>2:24.41</td>
                      <td align="right">16</td>
                      <td align="right">175</td>
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

export default StacksPage
