import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const MoistPage = () => {
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
              art_moist_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "moist_meme" }
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
            <Section id="moist">
              <Container>
                <h1>Moist Gardens - Gotta Catch 'Em All</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_moist_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>8:00PM - 11:00PM
                    </p>
                    <p>
                      <strong>Location: </strong>Petit Campus
                    </p>
                    <p>
                      <strong>Drinks: </strong>$11 Pitchers, Non-Alcoholic
                      and/or Gluten Free Available
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone!
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  How many pitchers can one possibly buy? Guess we'll find out.
                  Catch them all tonight!! We don't care what's in your pitcher
                  so long as it's <strong>MOIST</strong>. Standard Café Campus
                  11$ pitchers apply. Celiac, and other pitchers are ok too!
                </p>
                <h2>Rules</h2>
                <p>Please actually drink your beer and don't waste it lol </p>
                <h2>Points</h2>
                <p>25 points per pitcher, max 50 pitchers per team.</p>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Pitchers</th>
                      <th title="Field #3">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PTOT</td>
                      <td align="right">50</td>
                      <td align="right">1250</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td align="right">38</td>
                      <td align="right">950</td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td align="right">37</td>
                      <td align="right">925</td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td align="right">26</td>
                      <td align="right">650</td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td align="right">25</td>
                      <td align="right">625</td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td align="right">22</td>
                      <td align="right">550</td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td align="right">18</td>
                      <td align="right">450</td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td align="right">10</td>
                      <td align="right">250</td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td align="right">10</td>
                      <td align="right">250</td>
                    </tr>
                    <tr>
                      <td>Arts 1</td>
                      <td align="right">9</td>
                      <td align="right">225</td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td align="right">9</td>
                      <td align="right">225</td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td align="right">7</td>
                      <td align="right">175</td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td align="right">1</td>
                      <td align="right">25</td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td align="right">0</td>
                      <td align="right">0</td>
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

export default MoistPage
