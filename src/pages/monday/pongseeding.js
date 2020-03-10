import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import { Container, Section } from "@components/global"
import styled from "styled-components"
import Layout from "@common/Layout"
import PongSeedingMeme from "../../images/art/pongseeding_meme.gif"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const PongSeedingsPage = () => {
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
        <Section id="pongseeding">
          <Container>
            <h1>Pong Seeding - Duck Hunt</h1>
            <br />
            <Grid>
              <Art>
                <img src={PongSeedingMeme} alt="Kirby Shooting" />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>7:00PM - 9:00PM
                </p>
                <p>
                  <strong>Location: </strong> Foufounes Downstairs
                </p>
                <p>
                  <strong>Players: </strong>1 guy + 1 girl per team.
                </p>
                <p>
                  <strong>Beverages: </strong>Non-Alcoholic and/or Gluten Free
                  Available
                </p>
              </div>
            </Grid>
            <br />
            <p>
              The only thing harder than shooting ducks is shooting pong balls
              into regulation cups... but this is just seeding. Number of cups
              sunk determines rankings for pong tournament on Friday.
            </p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>Each team gets 1 minute, rapid fire shooting at 10 cups.</li>
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
                  <td>Arts 3, PTOT</td>
                </tr>
                <tr>
                  <td>7:15 PM</td>
                  <td>Education 2, Science 2</td>
                </tr>
                <tr>
                  <td>7:30 PM</td>
                  <td>Arts 2, Management 2</td>
                </tr>
                <tr>
                  <td>7:45 PM</td>
                  <td>Arts 5, Education 1</td>
                </tr>
                <tr>
                  <td>8:00 PM</td>
                  <td>Arts 4, Medicine</td>
                </tr>
                <tr>
                  <td>8:15 PM</td>
                  <td>Arts 1, Law</td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>Engineering, Management 1</td>
                </tr>
                <tr>
                  <td>8:45 PM</td>
                  <td>Music, Science 1</td>
                </tr>
              </tbody>
            </table>
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Team</th>
                  <th title="Field #2">Balls Sunk</th>
                  <th title="Field #3">Place</th>
                  <th title="Field #4">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medicine</td>
                  <td align="right">19</td>
                  <td align="right">1</td>
                  <td align="right">500</td>
                </tr>
                <tr>
                  <td>Arts 4</td>
                  <td align="right">18</td>
                  <td align="right">2</td>
                  <td align="right">425</td>
                </tr>
                <tr>
                  <td>Arts 5</td>
                  <td align="right">18</td>
                  <td align="right">3</td>
                  <td align="right">375</td>
                </tr>
                <tr>
                  <td>Education 2</td>
                  <td align="right">18</td>
                  <td align="right">4</td>
                  <td align="right">315</td>
                </tr>
                <tr>
                  <td>Arts 1</td>
                  <td align="right">17</td>
                  <td align="right">5</td>
                  <td align="right">275</td>
                </tr>
                <tr>
                  <td>Music</td>
                  <td align="right">16</td>
                  <td align="right">6</td>
                  <td align="right">225</td>
                </tr>
                <tr>
                  <td>Arts 2</td>
                  <td align="right">15</td>
                  <td align="right">7</td>
                  <td align="right">200</td>
                </tr>
                <tr>
                  <td>Management 2</td>
                  <td align="right">15</td>
                  <td align="right">8</td>
                  <td align="right">175</td>
                </tr>
                <tr>
                  <td>Science 2</td>
                  <td align="right">15</td>
                  <td align="right">9</td>
                  <td align="right">150</td>
                </tr>
                <tr>
                  <td>Science 1</td>
                  <td align="right">13</td>
                  <td align="right">10</td>
                  <td align="right">125</td>
                </tr>
                <tr>
                  <td>Education 1</td>
                  <td align="right">12</td>
                  <td align="right">11</td>
                  <td align="right">115</td>
                </tr>
                <tr>
                  <td>Management 1</td>
                  <td align="right">12</td>
                  <td align="right">12</td>
                  <td align="right">100</td>
                </tr>
                <tr>
                  <td>Arts 3</td>
                  <td align="right">10</td>
                  <td align="right">13</td>
                  <td align="right">85</td>
                </tr>
                <tr>
                  <td>Engineering</td>
                  <td align="right">10</td>
                  <td align="right">14</td>
                  <td align="right">75</td>
                </tr>
                <tr>
                  <td>Law</td>
                  <td align="right">10</td>
                  <td align="right">15</td>
                  <td align="right">65</td>
                </tr>
                <tr>
                  <td>PTOT</td>
                  <td align="right">10</td>
                  <td align="right">16</td>
                  <td align="right">50</td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Section>
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

export default PongSeedingsPage
