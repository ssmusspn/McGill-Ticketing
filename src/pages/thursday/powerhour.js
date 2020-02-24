import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"

const PowerHourPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_powerhour_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "powerhour_meme" }
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
        <Section id="powerhour">
          <Container>
            <h1>Power Hour - Kirby's Dream Land</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_powerhour_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>9:00PM - 10:00PM
                </p>
                <p>
                  <strong>Location: </strong> Entrepôts Dominion
                </p>
                <p>
                  <strong>Players: </strong>Everyone!
                </p>
              </div>
            </Grid>
            <br />
            <p>
              Power hour! 1 beer a minute for an hour, becomes a beer shower.
              It's what we've all been dreaming about since Hype Night... *clap
              clap clapclapclap.* Who wouldn't be dreaming about this? If I can
              do my math correctly, BEER + TABLES = BODY SHOTS. Nightmares only
              begin if tables break...
            </p>
            <h2 id="rules">Rules</h2>
            <p>DO NOT STAND ON THE TABLES</p>
            <p>DO NOT THROW BEER</p>
            <h2>Points</h2>
            Tiered points for team spirit and helpfulness.
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Tier</th>
                  <th title="Field #2">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="right">1</td>
                  <td align="right">2000</td>
                </tr>
                <tr>
                  <td align="right">2</td>
                  <td align="right">1200</td>
                </tr>
                <tr>
                  <td align="right">3</td>
                  <td align="right">700</td>
                </tr>
                <tr>
                  <td align="right">4</td>
                  <td align="right">400</td>
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

export default PowerHourPage

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
