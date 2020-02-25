import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const MCATPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_mcat_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "mcat_meme" }
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
        <Section id="mcat">
          <Container>
            <h1>MCAT - Brain Age</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_mcat_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>12:00PM - 2:00PM
                </p>
                <p>
                  <strong>Location: </strong> Petit Campus Curtained Area
                </p>
                <p>
                  <strong>Players: </strong>2 Per Team
                </p>
              </div>
            </Grid>
            <br />
            <p>
              A test based on questions from different faculties. 2 people per
              team, 1 pitcher and 3 shots per person. Science this may be your
              only shot to actually do well on the MCAT (we know you’re not
              going to med school anyways)
            </p>
            <h2 id="rules">Rules</h2>
            <ul>
              <li>
                You may <em>not</em> leave the exam room
              </li>

              <li>Cell phones are banned</li>

              <li>Standard McGill Exam Rules Apply</li>

              <li>
                You must complete your exam and all of the alcohol provided
                within 60 minutes
              </li>
            </ul>
            <h2>Schedule</h2>
            <h4>Wave 1: Noon</h4>
            <p>
              Arts 1, Arts 2, Science 1, Music, Law, Medicine, Education 1,
              Management 2
            </p>
            <h4>Wave 2: 1PM</h4>
            <p>
              Arts 3, Arts 4, Arts 5, Engineering, Management 2, Education 2,
              Science 2, PTOT
            </p>
            <h2>Points</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Place</th>
                  <th title="Field #2">Points</th>
                  <th title="Field #3">Grade</th>
                  <th title="Field #4">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="right">1</td>
                  <td align="right">750</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">2</td>
                  <td align="right">650</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">3</td>
                  <td align="right">550</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">4</td>
                  <td align="right">475</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">5</td>
                  <td align="right">400</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">6</td>
                  <td align="right">350</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">7</td>
                  <td align="right">300</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">8</td>
                  <td align="right">250</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">9</td>
                  <td align="right">225</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">10</td>
                  <td align="right">200</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">11</td>
                  <td align="right">175</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">12</td>
                  <td align="right">150</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">13</td>
                  <td align="right">125</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">14</td>
                  <td align="right">100</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">15</td>
                  <td align="right">85</td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td align="right">16</td>
                  <td align="right">70</td>
                  <td> </td>
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

export default MCATPage

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
