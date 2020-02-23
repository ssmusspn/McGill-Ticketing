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
          art_arts1: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "arts1" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_arts2: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "arts2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_arts3: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "arts3" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_arts4: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "arts4" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_arts5: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "arts5" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_science1: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "science1" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_science2: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "science2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_engineering: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "engineering" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_ptot: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "ptot" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_management1: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "management1" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_management2: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "management2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_medicine: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "medicine" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_law: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "law" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_education1: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "education1" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_education2: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "education2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          art_music: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "music" }
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
            <h1>Meet the Players</h1>
            <Grid>
              <div>
                <h2>Arts 1</h2>
              </div>
              <Art>
                <Img fluid={data.art_arts1.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_arts2.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Arts 2</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Arts 3</h2>
              </div>
              <Art>
                <Img fluid={data.art_arts3.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_arts4.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Arts 4</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Arts 5</h2>
              </div>
              <Art>
                <Img fluid={data.art_arts5.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_education1.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Education 1</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Education 2</h2>
              </div>
              <Art>
                <Img fluid={data.art_education2.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_engineering.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Engineering</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Law</h2>
              </div>
              <Art>
                <Img fluid={data.art_law.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_management1.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Management 1</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Management 2</h2>
              </div>
              <Art>
                <Img fluid={data.art_management2.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_medicine.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Medicine</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Music</h2>
              </div>
              <Art>
                <Img fluid={data.art_music.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_ptot.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>PTOT</h2>
              </div>
              <br />
            </Grid>
            <Grid>
              <div>
                <h2>Science 1</h2>
              </div>
              <Art>
                <Img fluid={data.art_science1.childImageSharp.fluid} />
              </Art>
              <br />
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_science2.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>Science 2</h2>
              </div>
              <br />
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
