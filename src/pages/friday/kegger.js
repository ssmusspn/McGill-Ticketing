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

const KeggerPage = () => {
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
  const StyledLink = styled(Link)`
    color: ${props => props.theme.color.primary};
    font-style: italic;
  `

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_kegger_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "kegger_meme" }
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
            <Section id="kegger">
              <Container>
                <h1>Kegger - DK's Jungle Ruins</h1>
                <br />
                <Grid>
                  <Art>
                    <Img fluid={data.art_kegger_meme.childImageSharp.fluid} />
                  </Art>
                  <div>
                    <h2 id="stage">Stage</h2>
                    <p>
                      <strong>Time: </strong>10:00AM - 4:00PM
                    </p>
                    <p>
                      <strong>Location: </strong>
                      <a href="https://goo.gl/maps/eNFoes5nXuzdor7W8">
                        ADPhi (ΑΔΦ)
                      </a>
                    </p>
                    <p>
                      <strong>Players: </strong>Everyone
                    </p>
                    <p>
                      <strong>Drinks: </strong>Free
                    </p>
                    <p>
                      <strong>Coat Check: </strong>Free
                    </p>
                  </div>
                </Grid>
                <br />
                <p>
                  No pancakes, no kegs, no Sig... is this even Pancake Kegger?
                  Thankfully our friends at ADPhi (ΑΔΦ) got us covered and saved
                  Kegger from Club 6/49 (and a big chunk of FAC-O as a whole).
                  Now we've found ourselves even closer to the mountain, and
                  deeper in the Jungle.
                </p>
                <p>
                  A personal favourite of ours, this event combines everything
                  we love: a frat house, games and alcohol... not to mention the
                  ~ jungle juice ~
                </p>
                <br />
                <h2>Activities</h2>
                <ul>
                  <li>
                    <StyledLink to="/friday/smash">
                      Super Smash(ed) Bros
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/friday/limbo">Limbo</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/friday/pong">Beer Pong</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/friday/ironchef">Iron Chef</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/friday/ironbartender">
                      Iron Bartender
                    </StyledLink>
                  </li>
                </ul>
                <h2>Schedule</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Limbo</th>
                      <th title="Field #3">Pong</th>
                      <th title="Field #4">Super Smash Bros.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arts 1</td>
                      <td>12:10</td>
                      <td> </td>
                      <td>10:40</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 5</td>
                      <td> </td>
                      <td>Science 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td>12:00</td>
                      <td> </td>
                      <td>10:30</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Education 1</td>
                      <td> </td>
                      <td>Medicine</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td>12:50</td>
                      <td> </td>
                      <td>11:20</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Management 2</td>
                      <td> </td>
                      <td>Education 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td>1:10</td>
                      <td> </td>
                      <td>11:10</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>PTOT</td>
                      <td> </td>
                      <td>PTOT</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td>12:10</td>
                      <td> </td>
                      <td>11:30</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 1</td>
                      <td> </td>
                      <td>Science 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td>12:00</td>
                      <td> </td>
                      <td>11:20</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 2</td>
                      <td> </td>
                      <td>Arts 3</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td>12:20</td>
                      <td> </td>
                      <td>10:50</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Medicine</td>
                      <td> </td>
                      <td>Management 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>1:00</td>
                      <td> </td>
                      <td>11:40</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Science 2</td>
                      <td> </td>
                      <td>Law</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td>12:30</td>
                      <td> </td>
                      <td>11:40</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Science 1</td>
                      <td> </td>
                      <td>Engineering</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td>12:40</td>
                      <td> </td>
                      <td>11:00</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Music</td>
                      <td> </td>
                      <td>Music</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td>12:50</td>
                      <td> </td>
                      <td>10:50</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 3</td>
                      <td> </td>
                      <td>Education 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td>12:20</td>
                      <td> </td>
                      <td>10:30</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Education 2</td>
                      <td> </td>
                      <td>Arts 2</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td>12:40</td>
                      <td> </td>
                      <td>11:00</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Management 1</td>
                      <td> </td>
                      <td>Management 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td>1:10</td>
                      <td> </td>
                      <td>11:10</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Arts 4</td>
                      <td> </td>
                      <td>Arts 4</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td>12:30</td>
                      <td> </td>
                      <td>10:40</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Law</td>
                      <td> </td>
                      <td>Science 1</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
                      <td>1:00</td>
                      <td> </td>
                      <td>11:30</td>
                    </tr>
                    <tr>
                      <td>Opponent</td>
                      <td>Engineering</td>
                      <td> </td>
                      <td>Arts 5</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Spirit</h2>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <th title="Field #1">Team</th>
                      <th title="Field #2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arts 1</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 2</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 3</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 4</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Arts 5</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 1</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Education 2</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Law</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 1</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Management 2</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Medicine</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Music</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>PTOT</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 1</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Science 2</td>
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

export default KeggerPage
