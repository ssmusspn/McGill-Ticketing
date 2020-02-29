import React from "react"

import styled from "styled-components"
import { useAuth } from "react-use-auth"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "@common/Navbar"
import { Container } from "@components/global"
import Layout from "@common/Layout"
import Footer from "@sections/Footer"
import PleaseLogin from "@sections/PleaseLogin"

const OffsetAuctionPage = () => {
  const { isAuthenticated } = useAuth()

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

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StaticQuery
          query={graphql`
            query {
              art_offsetauction_meme: file(
                sourceInstanceName: { eq: "art" }
                name: { eq: "offsetauction_meme" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          `}
          render={data => (
            <StyledContainer>
              <div>
                <Grid>
                  <h1>Offset Auction</h1>
                  <Art>
                    <Img
                      fluid={data.art_offsetauction_meme.childImageSharp.fluid}
                    />
                  </Art>
                </Grid>
                <br />
                <p>
                  Get your wallets out! Buy some different perks with all
                  proceeds going to carbon offsets. Whether you need an extra
                  boatracer or just want your favorite spot for power hour, this
                  is your chance to give your team some extra help!
                </p>
                <p>
                  The auction will automatically extend if there is a bid within
                  the final 3 minutes, the auction will be automatically
                  extended a further 3 minutes for a maximum of 30 minutes
                  total.
                </p>
                <p>
                  <strong>
                    The auction will begin on Saturday March 7th and end at noon
                    on March 10th.
                  </strong>
                </p>
                <h2 id="rules">Rules</h2>

                <ul>
                  <li>For each item, one committee member can be bought</li>

                  <li>The committee member can be used for the event</li>

                  <li>
                    For bracketed items, the committee member can be used for
                    every round except for the finals
                    <ul>
                      <li>
                        If third place race/competition, the committee member
                        may participate
                      </li>
                    </ul>
                  </li>

                  <li>
                    For power hour table, the item is both your spot of choice
                    and the two teams next to yours
                  </li>
                </ul>
                <h1 id="auctionitems">Auction Items</h1>

                <ul>
                  <li>Cake Colin at Kegger</li>

                  <li>
                    Committee Boat Race Girl (not applicable for time trials)
                  </li>

                  <li>
                    Committee Boat Race Guy (not applicable for time trials)
                  </li>

                  <li>Committee Straws</li>

                  <li>Committee Stacks</li>

                  <li>Committee Pong</li>

                  <li>Committee Pitcher Pass</li>

                  <li>Power Hour Table</li>
                </ul>
              </div>
            </StyledContainer>
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

export default OffsetAuctionPage
