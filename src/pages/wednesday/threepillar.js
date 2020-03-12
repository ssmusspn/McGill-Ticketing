import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const ThreePillarPage = () => {
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
              art_threepillar_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "threepillar_meme" }
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
            <Section id="threepillar">
              <Container>
                <h1>3 Pillar Chug - The Legend of Zelda: Tri Force Heroes</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_threepillar_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>8:30PM - 11:30PM
                    </p>
                    <p>
                      <strong>Location: </strong>Petit Campus
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone! Up to 40 participants
                      per team will receive points
                    </p>
                    <p>
                      <strong>Beverages: </strong>Non-Alcoholic and/or Gluten
                      Free Available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Show the world you embody the three pillars of FacO with a
                  Three pillar chug: Athletics, Academics, and of course
                  Alcohol. This is one of those events where your chug time
                  could be 69x times higher than your GPA and you’d STILL get
                  the points.
                </p>
                <h2>Rules</h2>
                <ul>
                  <li>
                    Player must complete and athletic challenge (a pushup)
                  </li>

                  <li>Player must complete a math problem (multiplication)</li>

                  <li>
                    Player must chug a regulation beer (if non-regulation they
                    can still receive points, but will not be placed on the
                    leaderboard).
                  </li>
                </ul>
                <h2>Points</h2>
                <p>
                  25 points per person to participate. Max of 40 people per team
                  will get points
                </p>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Attempts</th>
                      <th title="Field #3">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Science 2</td>
                      <td align="right">34</td>
                      <td align="right">1450</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td align="right">10</td>
                      <td align="right">650</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td align="right">21</td>
                      <td align="right">525</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td align="right">20</td>
                      <td align="right">500</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td align="right">15</td>
                      <td align="right">375</td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td align="right">14</td>
                      <td align="right">350</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td align="right">12</td>
                      <td align="right">300</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td align="right">11</td>
                      <td align="right">275</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td align="right">10</td>
                      <td align="right">250</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td align="right">9</td>
                      <td align="right">225</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td align="right">0</td>
                      <td align="right">200</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td align="right">5</td>
                      <td align="right">125</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td align="right">4</td>
                      <td align="right">100</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td align="right">3</td>
                      <td align="right">75</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td align="right">1</td>
                      <td align="right">25</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
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

export default ThreePillarPage
