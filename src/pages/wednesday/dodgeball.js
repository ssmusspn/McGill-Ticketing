import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { Table } from "reactstrap"

const DodegeballPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_dodgeball_bracket: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "dodgeball_bracket" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_dodgeball_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "dodgeball_meme" }
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
        <Section id="dodgeball">
          <Container>
            <h1>Dodgeball - Wii Sports</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_dodgeball_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>3:00PM - 5:00PM
                </p>
                <p>
                  <strong>Location: </strong> Tomlinson Fieldhouse
                </p>
                <p>
                  <strong>Players: </strong>10 people, 6 guys max
                </p>
              </div>
            </Grid>
            <br />
            <p>
              In 2020 we dodging feelings but today we're also dodging balls
            </p>
            <h2 id="rules">Rules</h2>
            <p>Classic rules; once you’re out, you cannot come back</p>

            <ul>
              <li>If you hit someone above the shoulder, you’re out</li>

              <li>If you catch a ball, the person who threw it is out</li>

              <li>If you get hit, you’re out</li>

              <li>
                You can block using another ball but must retain control of it
              </li>
            </ul>

            <p>
              Games go up to 5 minutes, after which the team that has the most
              people. Finals and 3rd place games will last 10 minutes.
            </p>
            <h2>Bracket</h2>
            <Img fluid={data.art_dodgeball_bracket.childImageSharp.fluid} />
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
                  <td align="right">2000</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td align="right">1700</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td align="right">1500</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td align="right">1250</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">900</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">900</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">900</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>5-8</td>
                  <td align="right">900</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>9-16</td>
                  <td align="right">400</td>
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

export default DodegeballPage

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
const StyledLink = styled(Link)`
  color: ${props => props.theme.color.primary};
  font-style: italic;
`
