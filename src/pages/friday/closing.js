import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const ClosingPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_closing_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "closing_meme" }
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
        <Section id="closing">
          <Container>
            <h1>Ultimate Pre - Luigi's Mansion</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_closing_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>9:00PM - 1:00AM
                </p>
                <p>
                  <strong>Location: </strong> Le Cinq
                </p>
                <p>
                  <strong>Players: </strong>Everyone!
                </p>
                <p>
                  <strong>Coat Check: </strong>$3.00
                </p>
              </div>
            </Grid>
            <br />
            <p>We hope you don't remember closing, because we won't either.</p>

            <p>
              The winning players of Factendo will be announced!!! Until then,
              its still anyone's game. Only the players who have completed all
              the levels and collected the most coinz will rein supreme tonight.
            </p>
            <h2 id="rules">Awards</h2>
            <ul>
              <li>Best Captains</li>

              <li>Best Staff</li>

              <li>Lifetime Achievement</li>

              <li>Rookie Award</li>

              <li>Three Pillar Award</li>

              <li>Winning Team</li>

              <li>Winning Faculty</li>
            </ul>
          </Container>
        </Section>
      )}
    />
    <Footer />
  </Layout>
)

export default ClosingPage

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
