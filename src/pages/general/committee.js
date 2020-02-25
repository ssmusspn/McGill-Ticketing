import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import Layout from "@common/Layout"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Section, Container } from "@components/global"

const CommitteePage = () => (
  <Layout>
    <Navbar />
    <StaticQuery
      query={graphql`
        query {
          art_sanchi: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sanchi" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_colin: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "colin" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_charmaine: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "charmaine" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_sam: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sam" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_kyle: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "kyle" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_michelle: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "michelle" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_anna: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "anna" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_matt: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "matt" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_maxine: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "maxine" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_hayley: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "hayley" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_sydney: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "sydney" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_tim: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "tim" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_natalie: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "natalie" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_nicole: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "nicole" }
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
        <Section id="committee">
          <Container>
            <div>
              <h1>Committee</h1>
              <p>
                Meet the members of FACTENDO Committee, who have been working
                hard all semester to plan Faculty Olympics 2020! Committee will
                be your first point of contact in the event of any issue, big or
                small. If something comes up during the week that needs to be
                disclosed, please do not hesitate to let us know. We are here to
                make sure events run smoothly and ensure the safety of all
                participants — but we also want you all to have a good time! All
                questions, concerns, complaints, and drinking buddy requests are
                encouraged and appreciated!!!
              </p>
            </div>
          </Container>
          <br />
          <Container>
            <h1>Mii Plaza</h1>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Sanchi Bhalla
                </p>
                <p>
                  <strong>Position:</strong> SSMU VP Internal
                </p>
                <p>
                  <strong>Favourite Mario Kart Character:</strong> the Blue
                  Shell
                </p>
              </div>
              <Art>
                <Img fluid={data.art_sanchi.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_colin.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Colin Seltzer
                </p>
                <p>
                  <strong>Position:</strong> Internal Logistics Coordinator
                  (ILC)
                </p>
                <p>
                  <strong>Favourite Mario Kart Character:</strong> Cat Peach
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Charmaine Luk
                </p>

                <p>
                  <strong>Position:</strong> Co-Chair
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Boo
                </p>
              </div>
              <Art>
                <Img fluid={data.art_charmaine.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_sam.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Sam Hamway
                </p>

                <p>
                  <strong>Position:</strong> Co-Chair
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Toad
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Kyle Rubenok
                </p>

                <p>
                  <strong>Position:</strong> Programming
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Yoshi
                </p>
              </div>
              <Art>
                <Img fluid={data.art_kyle.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_michelle.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Michelle Cwintal
                </p>

                <p>
                  <strong>Position:</strong> Programming
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Toad
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Anna Sixsmith
                </p>

                <p>
                  <strong>Position:</strong> Communications
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> King Boo
                </p>
              </div>
              <Art>
                <Img fluid={data.art_anna.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_matt.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Matt O'Connell
                </p>

                <p>
                  <strong>Position:</strong> Communications
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Shy Guy
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Maxine Wu
                </p>

                <p>
                  <strong>Position:</strong> Creative Director
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Bowser Jr.
                </p>
              </div>
              <Art>
                <Img fluid={data.art_maxine.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_hayley.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Hayley Ford
                </p>

                <p>
                  <strong>Position:</strong> Head of Captains
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Mario
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Sydney Kalyn
                </p>

                <p>
                  <strong>Position:</strong> Logistics
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Baby Toad
                </p>
              </div>
              <Art>
                <Img fluid={data.art_sydney.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_tim.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Tim Durand
                </p>

                <p>
                  <strong>Position:</strong> Logistics
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Wario
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <p>
                  <strong>Name:</strong> Natalie Kopstals
                </p>

                <p>
                  <strong>Position:</strong> Inclusivity
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Peach
                </p>
              </div>
              <Art>
                <Img fluid={data.art_natalie.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_nicole.childImageSharp.fluid} />
              </Art>
              <div>
                <p>
                  <strong>Name:</strong> Nicole Ritson
                </p>

                <p>
                  <strong>Position:</strong> Chief of Staff
                </p>

                <p>
                  <strong>Favourite Mario Kart Character:</strong> Mario
                </p>
              </div>
            </Grid>
          </Container>
        </Section>
      )}
    />
    <Footer />
  </Layout>
)

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

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`

export default CommitteePage
