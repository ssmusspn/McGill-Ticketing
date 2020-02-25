import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"
import { useAuth } from "react-use-auth"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import PleaseLogin from "@sections/PleaseLogin"

const OffsetAuctionPage = () => {
  const { isAuthenticated } = useAuth()

  const StyledContainer = styled(Container)`
    padding-top: 25px;
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
                <h1>Offset Auction</h1>
                <Img
                  fluid={data.art_offsetauction_meme.childImageSharp.fluid}
                />
                <br />
                <p>
                  Get your wallets out! Buy some different perks with all
                  proceeds going to carbon offsets. Whether you need an extra
                  boatracer or just want your favorite spot for power hour, this
                  is your chance to give your team some extra help!
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
