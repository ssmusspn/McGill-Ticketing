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

const BeerioKartPage = () => {
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
              art_beeriokart_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "beeriokart_meme" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              art_beeriokart_bracket: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "beeriokart_bracket" }
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
            <Section id="beeriokart">
              <Container>
                <h1>Beerio Kart</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_beeriokart_meme.childImageSharp.fluid}
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
                      <strong>Players: </strong>1 guy + 1 girl per team.
                    </p>
                    <p>
                      <strong>Beverages: </strong>Gluten free alcoholic
                      beverages are available
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Beer. Mario Kart. We could leave it at that and I know you’d
                  want to do this event already but it gets even better. You may
                  be the fastest chugger, or you may be the fastest Karter, but
                  can you be both at the SAME TIME? In Beerio Kart you are
                  required to not only beat your opponents in a good old
                  fashioned Nintendo racing throw down, but you must also finish
                  a beer before the end of the race. And no, your practice with
                  road beers on your way up north for a ski trip doesn’t count,
                  in this case when you’re drinking you can’t be driving (good
                  advice for life!). The person who finishes their beer and ends
                  in the highest position, wins!
                </p>
                <h2 id="rules">Rules</h2>
                <ul>
                  <li>Must finish Mario Kart Race</li>

                  <li>
                    Must finish 1 regulation beer before crossing the finish
                    line
                  </li>

                  <li>Cannot Drink and Drive at the same time</li>
                </ul>
                <h2>Brackets</h2>
                <Img
                  fluid={data.art_beeriokart_bracket.childImageSharp.fluid}
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
                      <td>1</td>
                      <td align="right">750</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td align="right">650</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td align="right">550</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td align="right">475</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">325</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">325</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">325</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>5-8</td>
                      <td align="right">325</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>9-16</td>
                      <td align="right">175</td>
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

export default BeerioKartPage
