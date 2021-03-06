import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from "@components/global"
import ExternalLink from "@common/ExternalLink"

import GithubIcon from "@static/icons/github.svg"
import InstagramIcon from "@static/icons/instagram.svg"
import FacebookIcon from "@static/icons/facebook.svg"

const SOCIAL = [
  {
    icon: GithubIcon,
    link: "https://github.com/ssmusspn",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/sspnssmu/",
  },
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/SSMUSSPN",
  },
]

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_footer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "factendo-characters" }
        ) {
          childImageSharp {
            fluid(maxWidth: 880) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_footer.childImageSharp.fluid}
            style={{ width: 1200, maxWidth: "100%", marginBottom: 0 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
)

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

export default Footer
