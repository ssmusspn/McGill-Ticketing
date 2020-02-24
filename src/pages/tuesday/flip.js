import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const FlipCupPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_flip_bracket: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "flip_bracket" }
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
        <Section id="flipcup">
          <Container>
            <h1>Flip Cup - Adventures of Flip</h1>
            <br />
            <Grid>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>8:00PM - 10:00PM
                </p>
                <p>
                  <strong>Location: </strong> Right elevated platform.
                </p>
                <p>
                  <strong>Players: </strong>Two teams of 5 people per team
                  minimum 2 girls
                </p>
              </div>
            </Grid>
            <br />
            <p>Odds you make it tongue flip cup? (jk)</p>
            <h2 id="rules">Rules</h2>
            <p>
              Teams face each other each having two 1/3 beers in front of them.
              They chug one and flip the cup. It is a race there and back. The
              fastest team moves on, bracket style.
            </p>
            <h2>Bracket</h2>
            <Img fluid={data.art_flip_bracket.childImageSharp.fluid} />
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Place</th>
                  <th title="Field #2">Points</th>
                  <th title="Field #3">Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td align="right">1500</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td align="right">1250</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td align="right">1100</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td align="right">950</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">650</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">275</td>
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

export default FlipCupPage

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
