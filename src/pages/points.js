import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"

const PointsPage = () => (
  <Layout>
    <Navbar />
    <StyledContainer>
      <div>
        <h1>Points</h1>
        <br />
        <p>
          During Faculty Olympics, events will either be tiered or marked. In
          tiered events, such as Power Hour, your team receives a tier of{" "}
          <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or{" "}
          <strong>4,</strong> based on team rowdiness, spirit, and manners —
          there’s no limit on how many teams can receive each tier. In events
          that are ranked, such as boat races, you will be ranked based on your
          placing in the event, and will be awarded points accordingly.
          Different marked events have different importance (ex. Beer Olympics
          are more weighted than drunken debates), and points are adjusted
          accordingly.
        </p>

        <p>
          And then there’s the wildcard factor: <strong>bonus points.</strong>{" "}
          Many people wonder exactly what they have to do to get bonus points.
          The truth is, committee is always watching, and throughout the week if
          we see you doing something that impresses us, shocks us, or your team
          is just being altogether awesome and embracing the spirit of Faculty
          Olympics, you will be rewarded. We also appreciate helping hands,
          whether it’s helping move all the tables out of the way at power hour
          or cleaning up at the end of pancake kegger. The best way to{" "}
          <strong>NOT</strong> get bonus points is by asking for them. If you
          come up to us and say “If I do this, will you give me bonus points?”
          the chances are very high that we won’t.
        </p>

        <p>
          Below is a list of standings by points which will be updated once
          daily here and in the Fac-O Participants group.
        </p>
      </div>
    </StyledContainer>
    <Footer />
  </Layout>
)

export default PointsPage

const StyledContainer = styled(Container)`
  padding-top: 25px;
`
