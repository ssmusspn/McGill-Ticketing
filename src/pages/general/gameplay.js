import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "@common/Layout"

const GampeplayPage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_sustainable_en: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sustainable_en" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_sustainable_fr: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sustainable_fr" }
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
        <StyledContainer>
          <div>
            <h1>Gameplay</h1>
            <br />
            <p>
              A perfect game DOES exist. In order to come out of a Mario Kart
              race in first place, you need to be one step ahead of your rivals.
              That means being a standout example of good behavior throughout
              your entire journey down Rainbow Road.
            </p>
            <br />
            <h2>Drinks</h2>
            <p>
              Drinks will be provided for all games, however if you wish to
              purchase any drinks you are more than welcome to do so, prices
              will be posted on respective pages.
            </p>
            <br />
            <h2>Attitude</h2>
            <p>
              Having a good attitude will make you the most successful player
              you can be. Don’t ruin the fun for everyone by being in a bad
              mood. Instead, open yourself up to new opportunities and hone your
              sense of adventure.
            </p>
            <br />
            <h2>Class</h2>
            <p>
              To be the the winner means besting your rivals. Every event at
              Faculty Olympics will be competitive, but your team may not win
              them all. Don’t be a sore loser; compete harder at the next
              events. Bring your team spirit and lead by example - cause
              although the trophy goes to one faculty we are all winners.
              Conduct that is not considered in the spirit of Faculty Olympics
              is unacceptable. The first and foremost goal of Faculty Olympics
              is to promote faculty pride and respect. The values that Faculty
              Olympics projects and encompasses are equity, respect, friendship,
              and school spirit. Everyone participating is first and foremost a
              friend, regardless of whether or not they are on an opposing team.
            </p>
            <br />
            <h2>Helping Hands</h2>
            <p>
              Faculty Olympics has over 800 people involved this year. Ideally,
              committee could be in 5 places at once making sure everything is
              running smoothly, but that can’t always happen. That’s why we need
              <b> YOUR</b> help all week. If you ever see committee or staff in
              need of a hand, please help us out! We’ll love you from the bottom
              of our hearts and I heard that there may be some bonus points
              involved.
            </p>
            <br />
            <h2>Participation</h2>
            <p>
              Having as many people from your team at as many events as possible
              will be a crucial component of your week, not to mention make it
              more fun for everyone.
            </p>
            <br />
            <h2>Inventory</h2>
            <ul>
              <li>ID (McGill and Government)</li>
              <li>Gatorade</li>
              <li>Emergen-C</li>
              <li>Ziplock Bags</li>
              <li>Cell Phone + Charger</li>
              <li>Condoms</li>
              <li>Gum/Mints</li>
              <li>Fanny pack</li>
              <li>Imodium or pills for travellers diarrhea</li>
              <li>Money for food/Meal Plan</li>
              <li>Coupons</li>
            </ul>
            <h2>Sustainability</h2>
            <p>
              We are proud to announce that Faculty Olympics 2020 has been
              certified as a Gold McGill Sustainable Event by the McGill Office
              of Sustainability! SSPN has done our absolute best in planning
              Fac-O to prioritize a more sustainable experience for all
              participants — for an event as big as Fac-O, better sustainability
              practices have a big impact! If you're interested in purchasing
              carbon offsets for the event, check out our{" "}
              <a href="/offsetauction">Offset Auction</a>.
            </p>
            <Grid>
              <Art>
                <Img fluid={data.art_sustainable_en.childImageSharp.fluid} />
              </Art>
              <Art>
                <Img fluid={data.art_sustainable_fr.childImageSharp.fluid} />
              </Art>
            </Grid>
          </div>
        </StyledContainer>
      )}
    />
    <Footer />
  </Layout>
)

export default GampeplayPage

const StyledContainer = styled(Container)`
  padding-top: 25px;
`

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`

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
