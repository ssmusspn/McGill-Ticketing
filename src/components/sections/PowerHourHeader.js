import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from "@components/global"

const PowerHourHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          art_build: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "faco-logo" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <HeaderWrapper>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.art_build.childImageSharp.fluid} />
              </Art>
              <Text>
                <h2>Purchase your</h2>
                <h2>single night</h2>
                <h2>FacO Power Hour Ticket</h2>
              </Text>
            </Grid>
          </Container>
        </HeaderWrapper>
      )}
    />
  )
}

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white};
  padding-top: 155px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;
  h1 {
    color: ${props => props.theme.color.secondary};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

export default PowerHourHeader
