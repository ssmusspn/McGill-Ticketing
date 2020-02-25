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

const SmashPage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_smash_bracket: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "smash_bracket" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              art_smash_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "smash_meme" }
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
            <Section id="smash">
              <Container>
                <h1>Super Smash(ed) Bros</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_smash_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>10:30AM - 1:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> ADPhi (ΑΔΦ) Room 2 (2nd Floor)
                    </p>
                    <p>
                      <strong>Players: </strong>2 People per team
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Come on down to the room that people were dead in at Carnival
                  - Room 2 and get sMaShEd.
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>
                    <p>
                      <strong>3 STOCK, 8 MINUTES</strong>
                    </p>
                  </li>

                  <li>
                    <p>
                      <em>
                        In the case of it going to time, the winner is whoever
                        or whichever team has more stocks. If the stocks are
                        even, it is whoever or whichever team has less
                        accumulated percent. If stocks and percent are equal, a
                        1 stock, 3-minute, rematch is played.
                      </em>
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>TEAM ATTACK ON</strong> (stock sharing allowed,
                      done by pressing A+B)
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>
                        STARTER STAGES: Battlefield, Final Destination,
                        Smashville, Yoshi’s Island, Lylat Cruise
                      </strong>
                    </p>
                  </li>

                  <li>
                    <p>
                      Characters are picked first. If players wiåsh to pick
                      characters secretly, they may request a blind pick where
                      everyone writes their character down, or tells a 3 party,
                      then reveals all character choices together.
                    </p>
                  </li>
                  <li>
                    <p>
                      The starting stage is picked by commonly agreeing to
                      Smashville, or by doing rock-paper-scissors, where the
                      winner will strike 1 stage, the loser then strikes 2
                      stages, and the winner strikes 1 more stage, which leaves
                      1 final starter stage to play on.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        COUNTERPICK STAGES: Castle Siege, Delfino Plaza, Frigate
                        Orpheon, Halberd, Pokémon Stadium
                      </strong>{" "}
                      (NOT Pokemon Stadium 2)
                    </p>
                  </li>

                  <li>
                    <p>
                      After a game, the winner bans 2 stages from the combined
                      stagelist of starters and counterpicks. The loser then
                      gets to select the stage they wish to play on for the
                      following game.
                    </p>
                  </li>

                  <li>
                    <p>
                      DAVE’S STUPID RULE: You cannot select a stage you have
                      already won in that set.
                    </p>
                  </li>
                </ul>
                <h2>Brackets</h2>
                <Img fluid={data.art_smash_bracket.childImageSharp.fluid} />
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Place</th>
                      <th title="Field #2">Points</th>
                      <th title="Field #3">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td align="right">1000</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td align="right">850</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td align="right">750</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td align="right">625</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">450</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">450</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">450</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">450</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">200</td>
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

export default SmashPage

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
