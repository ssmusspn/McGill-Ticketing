import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import StrawsMeme from "../../images/art/straws_meme.gif"
import { StaticQuery, graphql } from "gatsby"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const StrawsPage = () => {
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
              art_tummies_bracket: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "tummies_bracket" }
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
            <Section id="straws">
              <Container>
                <h1>Straws - Super Suck Bros</h1>
                <br />
                <Grid>
                  <img src={StrawsMeme} alt="Kirby Swallowing" />
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>9:30PM - 11:00PM
                    </p>
                    <p>
                      <strong>Location: </strong>Mezzanine
                    </p>
                    <p>
                      <strong>Players: </strong>5 people from each team, minimum
                      2 girls.
                    </p>
                  </div>
                </Grid>
                <br />
                <p>If Kirby can suck it up so can you.</p>
                <h2 id="rules">Rules</h2>
                <p>
                  Each team starts with a bucket. Each participant is given one
                  straw. Five players per team team, minimum two girls per team.
                  The objective of the game is to finish the beer in the bucket
                  as quickly as possible.
                </p>
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
                      <td>9:30 PM</td>
                      <td>Law, Science 2</td>
                    </tr>
                    <tr>
                      <td>9:40 PM</td>
                      <td>Education 2, Engineering</td>
                    </tr>
                    <tr>
                      <td>9:50 PM</td>
                      <td>Arts 4, Arts 5</td>
                    </tr>
                    <tr>
                      <td>10:00 PM</td>
                      <td>Music, Science 1</td>
                    </tr>
                    <tr>
                      <td>10:10 PM</td>
                      <td>Arts 2, Management 1</td>
                    </tr>
                    <tr>
                      <td>10:20 PM</td>
                      <td>Arts 3, Education 1</td>
                    </tr>
                    <tr>
                      <td>10:30 PM</td>
                      <td>Medicine, PTOT</td>
                    </tr>
                    <tr>
                      <td>10:40 PM</td>
                      <td>Arts 1, Management 2</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Place</th>
                      <th title="Field #2">Points</th>
                      <th title="Field #3">Time</th>
                      <th title="Field #4">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="right">01</td>
                      <td align="right">1500</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">02</td>
                      <td align="right">1250</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">03</td>
                      <td align="right">1100</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">04</td>
                      <td align="right">950</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">05</td>
                      <td align="right">825</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">06</td>
                      <td align="right">700</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">07</td>
                      <td align="right">600</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">08</td>
                      <td align="right">525</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">09</td>
                      <td align="right">450</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">10</td>
                      <td align="right">375</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">11</td>
                      <td align="right">325</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">12</td>
                      <td align="right">275</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">13</td>
                      <td align="right">250</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">14</td>
                      <td align="right">225</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">15</td>
                      <td align="right">200</td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">16</td>
                      <td align="right">175</td>
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

export default StrawsPage
