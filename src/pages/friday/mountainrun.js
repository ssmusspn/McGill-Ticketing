import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import MountainRunMeme from "../../images/art/mountainrun_meme.gif"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const MountainRunPage = () => {
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
        <Section id="mountainrun">
          <Container>
            <h1>Mountain Run - DK's Jungle Run</h1>
            <br />
            <Grid>
              <Art>
                <img src={MountainRunMeme} alt="Rise and Shine" />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>8:30AM - 10:30AM
                </p>
                <p>
                  <strong>Start Location: </strong> ADPhi (ΑΔΦ)
                </p>
                <p>
                  <strong>Players: </strong>4 people (1 girl min)
                </p>
              </div>
            </Grid>
            <br />
            <p>
              New FAC-O, New Rules ! Its like Mountain Run but more lowkey (s/o
              SPVM) - we like to call it a Jungle Run. Don't worry, the length
              of the run hasn't changed. Get ready to run around the mountain
              (kind of) and join us after at ADPhi (ΑΔΦ) for Kegger. Don't slip
              on a banana on your way over!
            </p>
            <h2 id="rules">Rules</h2>
            <p>
              Each team needs to carry a case of beer. When they get to ADPhi
              (ΑΔΦ) they need to drink 6 beers and 375ml of fireball.
            </p>
            <h2>Schedule</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Departure Time</th>
                  <th title="Field #2">Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8:30 AM</td>
                  <td>Engineering, Law, Science 1</td>
                </tr>
                <tr>
                  <td>8:40 AM</td>
                  <td>Arts 4, Education 2, Medicine</td>
                </tr>
                <tr>
                  <td>8:50 AM</td>
                  <td>Arts 1 ,Arts 5, PTOT</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>Arts 3 ,Music, Science 2</td>
                </tr>
                <tr>
                  <td>9:10 AM</td>
                  <td>Arts 2, Management 1, Management 2</td>
                </tr>
                <tr>
                  <td>9:20 AM</td>
                  <td>Education 1</td>
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

export default MountainRunPage
