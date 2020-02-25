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

const UltimatePrePage = () => {
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
              art_ultimatepre_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "ultimatepre_meme" }
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
            <Section id="ultimatepre">
              <Container>
                <h1>Ultimate Pre - Luigi's Mansion</h1>
                <br />
                <Grid>
                  <Art>
                    <Img
                      fluid={data.art_ultimatepre_meme.childImageSharp.fluid}
                    />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>6:00PM - 9:00PM
                    </p>
                    <p>
                      <strong>Location: </strong> You tell us!
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone!
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Now it's your turn. Show up the rowdiest party you can imagine
                  and that you breathe and bleed Factendo at heart. Spooky
                  things are known to happen at Luigi's Mansion. Committee will
                  come for about 20 minutes per party.
                </p>
                <h2 id="rules">Rules</h2>
                <p>LOL There are no rules</p>
                <h2>Points</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Tier</th>
                      <th title="Field #2">Points</th>
                      <th title="Field #3">Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="right">1</td>
                      <td align="right">750</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">2</td>
                      <td align="right">500</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">3</td>
                      <td align="right">300</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td align="right">4</td>
                      <td align="right">100</td>
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

export default UltimatePrePage
