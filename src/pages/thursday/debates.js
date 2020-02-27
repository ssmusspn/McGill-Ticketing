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

const DrunkDebatesPage = () => {
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
              art_drunkdebates_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "drunkdebates_meme" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              art_drunkdebates_bracket: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "drunkdebates_bracket" }
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
            <Section id="drunkdebates">
              <Container>
                <h1>Drunk Debates - Sonic Rivals</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_drunkdebates_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>10:00AM - 12:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> Café Campus Main Stage
                    </p>
                    <p>
                      <strong>Players: </strong>1 person per team
                    </p>
                    <p>
                      <strong>Beverages: </strong>Gluten free alcoholic
                      beverages are available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Ever been to SSMU GA? Yeah, don’t worry, we haven’t either,
                  but these debates are about to be EXACTLY the opposite, not
                  only time efficient, but interesting as well. Two participants
                  step on stage to a chug off. The winner chooses which side to
                  argue, loser speaks first.
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>1 Minute Opening</li>

                  <li>30s Rebuttal</li>

                  <li>Winner Chosen by crowd applause</li>

                  <li>
                    For and Against are decided by the chug off. Winner of the
                    chug off can also choose if they want to go first or second.
                  </li>
                </ul>
                <h2>Brackets</h2>
                <Img
                  fluid={data.art_drunkdebates_bracket.childImageSharp.fluid}
                />
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

export default DrunkDebatesPage
