import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"

const StacksPage = () => (
  <Layout>
    <Navbar />
    <Section id="stacks">
      <Container>
        <h1>Flip Tac Toe - Kirby's Extra Epic Flip</h1>
        <br />
        <Grid>
          <div>
            <h2 id="stage">Stage</h2>
            <p>
              <strong>Time: </strong>8:30PM - 10:30PM
            </p>
            <p>
              <strong>Location: </strong>Right elevated platform
            </p>
            <p>
              <strong>Players: </strong>Everyone! Participation Points
            </p>
          </div>
        </Grid>
        <br />
        <p>
          A table is set up with a tic-tac-toe board. Players will be positioned
          on the same side of the table in a line with their respective team.
          The first team member from both sides will step forward, drink their
          cup and proceed to flip the cup until it lands. Once a player lands
          their flip they may place it on the tic-tac-toe board and proceed to
          the end of their line. The next player will proceed to take their turn
          drinking and flipping. Players do not need to wait for their
          competitor to land before proceeding with their next team member. A
          team wins once they successfully make a line on the tic tac toe board.
        </p>
        <h2>Points</h2>
        <p>
          50 points per person to participate. Max of 20 people per team will
          get points
        </p>
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

export default StacksPage

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
