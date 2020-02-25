import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container, Section } from "@components/global"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const SSMUDayPage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_ssmuday_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "ssmuday_meme" }
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
            <Section id="ssmuday">
              <Container>
                <h1>SSMU Day - Sonic Unleashed</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_ssmuday_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>10:00AM - 4:00PM
                    </p>
                    <p>
                      <strong>Location: </strong>
                      Café Campus
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone
                    </p>
                    <p>
                      <strong>Drinks: </strong>$13 Pitchers
                    </p>
                    <p>
                      <strong>Coat Check: </strong>Free Self Serve
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  Gerts is dead and so is the contruction on it. The only way to
                  cope is to day drink at everyone's second home, Café Campus.
                  Come ~unleash~ yourself at Café and participate in a variety
                  of fun and "wholesome" games. No regrets today!
                </p>
                <br />
                <h2>Activities</h2>
                <ul>
                  <li>
                    <StyledLink to="/thursday/mcat">MCAT</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/beeriokart">
                      Beerio Kart
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/debates">
                      Drunk Debates
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/casecrack">Case Crack</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/pitcherpass">
                      Pitcher Pass
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/spellingbee">
                      Spelling Bee
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/armwrestling">
                      Arm Wrestling
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/thursday/fearoffood">
                      Fear of Food
                    </StyledLink>
                  </li>
                </ul>
                <h2>Schedule</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Beerio Kart</th>
                      <th title="Field #3">Arm Wrestling</th>
                      <th title="Field #4">Spelling Bee</th>
                      <th title="Field #5">Drunk Debates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arts 1</td>
                      <td>10:40</td>
                      <td>10:40</td>
                      <td>10:20</td>
                      <td>2:25</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Law</td>
                      <td>Medicine</td>
                      <td>-</td>
                      <td>Science 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>10:35</td>
                      <td>10:35</td>
                      <td>10:40</td>
                      <td>2:15</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Music</td>
                      <td>Science 2</td>
                      <td>-</td>
                      <td>Education 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>10:50</td>
                      <td>10:25</td>
                      <td>10:30</td>
                      <td>2:05</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Medicine</td>
                      <td>Arts 4</td>
                      <td>-</td>
                      <td>Law</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td>10:30</td>
                      <td>10:25</td>
                      <td>10:10</td>
                      <td>1:15</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Education 1</td>
                      <td>Arts 3</td>
                      <td>-</td>
                      <td>Engineering</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td>10:45</td>
                      <td>10:20</td>
                      <td>10:30</td>
                      <td>1:55</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Science 1</td>
                      <td>Science 1</td>
                      <td>-</td>
                      <td>PTOT</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>10:30</td>
                      <td>10:15</td>
                      <td>10:10</td>
                      <td>1:35</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 4</td>
                      <td>Law</td>
                      <td>-</td>
                      <td>Music</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>10:20</td>
                      <td>10:30</td>
                      <td>10:30</td>
                      <td>2:15</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Science 2</td>
                      <td>Management 1</td>
                      <td>-</td>
                      <td>Education 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>10:15</td>
                      <td>10:50</td>
                      <td>10:40</td>
                      <td>1:15</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Management 1</td>
                      <td>Music</td>
                      <td>-</td>
                      <td>Arts 4</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>10:40</td>
                      <td>10:15</td>
                      <td>10:10</td>
                      <td>2:05</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 1</td>
                      <td>Education 1</td>
                      <td>-</td>
                      <td>Arts 3</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>10:15</td>
                      <td>10:30</td>
                      <td>10:40</td>
                      <td>1:25</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Engineering</td>
                      <td>Education 2</td>
                      <td>-</td>
                      <td>Science 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>10:25</td>
                      <td>10:45</td>
                      <td>10:20</td>
                      <td>1:45</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>PTOT</td>
                      <td>PTOT</td>
                      <td>-</td>
                      <td>Medicine</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>10:50</td>
                      <td>10:40</td>
                      <td>10:20</td>
                      <td>1:45</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 3</td>
                      <td>Arts 1</td>
                      <td>-</td>
                      <td>Management 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>10:35</td>
                      <td>10:50</td>
                      <td>10:20</td>
                      <td>1:35</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 2</td>
                      <td>Engineering</td>
                      <td>-</td>
                      <td>Education 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>10:25</td>
                      <td>10:45</td>
                      <td>10:30</td>
                      <td>1:55</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Management 2</td>
                      <td>Management 2</td>
                      <td>-</td>
                      <td>Arts 5</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td>10:45</td>
                      <td>10:20</td>
                      <td>10:40</td>
                      <td>2:25</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 4</td>
                      <td>Arts 5</td>
                      <td>-</td>
                      <td>Arts 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>10:20</td>
                      <td>10:35</td>
                      <td>10:10</td>
                      <td>1:25</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Education 2</td>
                      <td>Arts 2</td>
                      <td>-</td>
                      <td>Management 1</td>
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

export default SSMUDayPage

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
