import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"

const BeerOPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_beero_meme: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "beero_meme" }
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
        <Section id="teams">
          <Container>
            <h1>Dusted BeerO - Mario Party</h1>
            <br />
            <Grid>
              <Art>
                <Img fluid={data.art_beero_meme.childImageSharp.fluid} />
              </Art>
              <div>
                <h2 id="stage">Stage</h2>
                <p>
                  <strong>Time: </strong>6:00PM - 1:00AM
                </p>
                <p>
                  <strong>Location: </strong>
                  Secret 🤫
                </p>
                <p>
                  <strong>Players: </strong>Everyone
                </p>
                <p>
                  <strong>Drinks: </strong>$15 Pitchers
                </p>
                <p>
                  <strong>Coat Check: </strong>$2.00
                </p>
              </div>
            </Grid>
            <br />
            <p>
              Did someone say DUSTED? Wexit might not be the theme this year but
              we might still end up in the Wild Wild West tonight... or East...
              or South. Maybe we'll even end up at Mac Campus haha jk... unless?
            </p>
            <br />
            <h2>Dusted Busses</h2>
            <ul>
              <li>
                Please be respectful of the buses, bus drivers and the
                respective coordinator on your bus. There will be a ZERO
                tolerance policy for anyone who breaks the rules on DUSTED buses
              </li>
              <li>
                ABSOLUTELY NO GOONS/OBVIOUS ALCOHOL WILL BE ALLOWED
                <ul>
                  <li>
                    Do not drink your entire drink the second you get on the
                    bus, its going to be a long ride, pace yourself. No matter
                    what, DO NOT THROW your bottle of "liquids" out the window
                  </li>
                </ul>
              </li>
              <li>
                Bus Loading begins at <strong>6:15PM</strong> at Jeanne-Mance
                Park and departing every 5 minutes <strong>until 7PM.</strong>
              </li>
              <li>
                Busses will be depart the venue to Jeanne-Mance Park starting at
                <strong>11PM.</strong>
              </li>
            </ul>
            <h2>Activities</h2>
            <ul>
              <li>
                <StyledLink to="/tuesday/flip">Flip Cup</StyledLink>
              </li>
              <li>
                <StyledLink to="/tuesday/straws">Straws</StyledLink>
              </li>
              <li>
                <StyledLink to="/tuesday/stacks">Stacks</StyledLink>
              </li>
              <li>
                <StyledLink to="/tuesday/tummies">Tummies</StyledLink>
              </li>
              <li>
                <StyledLink to="/tuesday/fliptactoe">Flip Tac Toe</StyledLink>
              </li>
            </ul>
            <h2>Schedule</h2>
            <table class="table table-bordered table-hover table-condensed">
              <thead>
                <tr>
                  <th title="Field #1">Team</th>
                  <th title="Field #2">Flip Cup</th>
                  <th title="Field #3">Tummies</th>
                  <th title="Field #4">Stacks</th>
                  <th title="Field #5">Straws</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arts 1</td>
                  <td>9:00</td>
                  <td>9:20</td>
                  <td>8:00</td>
                  <td>10:40</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Education 2</td>
                  <td>PTOT</td>
                  <td>Law</td>
                  <td>Management 2</td>
                </tr>
                <tr>
                  <td>Arts 2</td>
                  <td>8:30</td>
                  <td>8:40</td>
                  <td>8:10</td>
                  <td>10:10</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Law</td>
                  <td>Engineering</td>
                  <td>Science 1</td>
                  <td>Management 1</td>
                </tr>
                <tr>
                  <td>Arts 3</td>
                  <td>8:10</td>
                  <td>8:30</td>
                  <td>9:00</td>
                  <td>10:20</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Arts 4</td>
                  <td>Medicine</td>
                  <td>Engineering</td>
                  <td>Education 1</td>
                </tr>
                <tr>
                  <td>Arts 4</td>
                  <td>8:10</td>
                  <td>9:00</td>
                  <td>8:40</td>
                  <td>9:50</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Arts 3</td>
                  <td>Science 1</td>
                  <td>Science 2</td>
                  <td>Arts 5</td>
                </tr>
                <tr>
                  <td>Arts 5</td>
                  <td>8:40</td>
                  <td>8:10</td>
                  <td>9:10</td>
                  <td>9:50</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Music</td>
                  <td>Education 2</td>
                  <td>Medicine</td>
                  <td>Arts 4</td>
                </tr>
                <tr>
                  <td>Education 1</td>
                  <td>9:10</td>
                  <td>8:20</td>
                  <td>8:50</td>
                  <td>10:20</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Management 1</td>
                  <td>Music</td>
                  <td>PTOT</td>
                  <td>Arts 3</td>
                </tr>
                <tr>
                  <td>Education 2</td>
                  <td>9:00</td>
                  <td>8:10</td>
                  <td>8:30</td>
                  <td>9:40</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Arts 1</td>
                  <td>Arts 5</td>
                  <td>Music</td>
                  <td>Engineering</td>
                </tr>
                <tr>
                  <td>Engineering</td>
                  <td>8:50</td>
                  <td>8:40</td>
                  <td>9:00</td>
                  <td>9:40</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Medicine</td>
                  <td>Arts 2</td>
                  <td>Arts 3</td>
                  <td>Education 2</td>
                </tr>
                <tr>
                  <td>Law</td>
                  <td>8:30</td>
                  <td>8:50</td>
                  <td>8:00</td>
                  <td>9:30</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Arts 2</td>
                  <td>Management 1</td>
                  <td>Arts 1</td>
                  <td>Science 2</td>
                </tr>
                <tr>
                  <td>Management 1</td>
                  <td>9:10</td>
                  <td>8:50</td>
                  <td>8:20</td>
                  <td>10:10</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Education 1</td>
                  <td>Law</td>
                  <td>Management 2</td>
                  <td>Arts 2</td>
                </tr>
                <tr>
                  <td>Management 2</td>
                  <td>9:20</td>
                  <td>9:10</td>
                  <td>8:20</td>
                  <td>10:40</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Science 1</td>
                  <td>Science 2</td>
                  <td>Management 1</td>
                  <td>Arts 1</td>
                </tr>
                <tr>
                  <td>Medicine</td>
                  <td>8:50</td>
                  <td>8:30</td>
                  <td>9:10</td>
                  <td>10:30</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Engineering</td>
                  <td>Arts 3</td>
                  <td>Arts 5</td>
                  <td>PTOT</td>
                </tr>
                <tr>
                  <td>Music</td>
                  <td>8:40</td>
                  <td>8:20</td>
                  <td>8:30</td>
                  <td>10:00</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Arts 5</td>
                  <td>Education 1</td>
                  <td>Education 2</td>
                  <td>Science 1</td>
                </tr>
                <tr>
                  <td>PTOT</td>
                  <td>8:20</td>
                  <td>9:20</td>
                  <td>8:50</td>
                  <td>10:30</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Science 2</td>
                  <td>Arts 1</td>
                  <td>Education 1</td>
                  <td>Medicine</td>
                </tr>
                <tr>
                  <td>Science 1</td>
                  <td>9:20</td>
                  <td>9:00</td>
                  <td>8:10</td>
                  <td>10:00</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>Management 2</td>
                  <td>Arts 4</td>
                  <td>Arts 2</td>
                  <td>Music</td>
                </tr>
                <tr>
                  <td>Science 2</td>
                  <td>8:20</td>
                  <td>9:10</td>
                  <td>8:40</td>
                  <td>9:30</td>
                </tr>
                <tr>
                  <td>Opponent</td>
                  <td>PTOT</td>
                  <td>Management 2</td>
                  <td>Arts 4</td>
                  <td>Law</td>
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

export default BeerOPage

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
