import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"
import { useAuth } from "react-use-auth"
import PleaseLogin from "@sections/PleaseLogin"

const PointsPage = () => {
  const { isAuthenticated } = useAuth()

  const StyledContainer = styled(Container)`
    padding-top: 25px;
  `

  if (isAuthenticated()) {
    return (
      <Layout>
        <Navbar />
        <StyledContainer>
          <div>
            <h1>Points</h1>
            <br />
            <p>
              During Faculty Olympics, events will either be tiered or marked.
              In tiered events, such as Power Hour, your team receives a tier of{" "}
              <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or{" "}
              <strong>4,</strong> based on team rowdiness, spirit, and manners —
              there’s no limit on how many teams can receive each tier. In
              events that are ranked, such as boat races, you will be ranked
              based on your placing in the event, and will be awarded points
              accordingly. Different marked events have different importance
              (ex. Beer Olympics are more weighted than drunken debates), and
              points are adjusted accordingly.
            </p>

            <p>
              And then there’s the wildcard factor:{" "}
              <strong>bonus points.</strong> Many people wonder exactly what
              they have to do to get bonus points. The truth is, committee is
              always watching, and throughout the week if we see you doing
              something that impresses us, shocks us, or your team is just being
              altogether awesome and embracing the spirit of Faculty Olympics,
              you will be rewarded. We also appreciate helping hands, whether
              it’s helping move all the tables out of the way at power hour or
              cleaning up at the end of pancake kegger. The best way to{" "}
              <strong>NOT</strong> get bonus points is by asking for them. If
              you come up to us and say “If I do this, will you give me bonus
              points?” the chances are very high that we won’t.
            </p>

            <p>
              Below is a list of standings by points which will be updated once
              daily here and in the Fac-O Participants group.
            </p>
          </div>
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1">Rank</th>
                <th title="Field #2">Team</th>
                <th title="Field #3">Total</th>
                <th title="Field #4">Scunt</th>
                <th title="Field #5">Monday</th>
                <th title="Field #6">Tuesday</th>
                <th title="Field #7">Wednesday</th>
                <th title="Field #8">Thursday</th>
                <th title="Field #9">Friday</th>
                <th title="Field #10">Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="right">1</td>
                <td>PTOT</td>
                <td>2,797</td>
                <td>2,797</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">2</td>
                <td>Science 2</td>
                <td>2,735</td>
                <td>2,485</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">3</td>
                <td>Arts 1</td>
                <td>2,651</td>
                <td>2,651</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">4</td>
                <td>Education 1</td>
                <td>2,596</td>
                <td>2,596</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">5</td>
                <td>Music</td>
                <td>2,466</td>
                <td>2,216</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">6</td>
                <td>Arts 3</td>
                <td>2,166</td>
                <td>1,916</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">7</td>
                <td>Science 1</td>
                <td>2,158</td>
                <td>1,908</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">8</td>
                <td>Engineering</td>
                <td>1,951</td>
                <td>1,701</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">9</td>
                <td>Education 2</td>
                <td>1,682</td>
                <td>1,682</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">10</td>
                <td>Management 2</td>
                <td>1,167</td>
                <td>1,167</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">11</td>
                <td>Law</td>
                <td>1,033</td>
                <td>1,033</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">12</td>
                <td>Arts 4</td>
                <td>949</td>
                <td>949</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">13</td>
                <td>Medicine</td>
                <td>854</td>
                <td>854</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">14</td>
                <td>Arts 2</td>
                <td>810</td>
                <td>810</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">15</td>
                <td>Management 1</td>
                <td>598</td>
                <td>598</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">16</td>
                <td>Arts 5</td>
                <td>198</td>
                <td>198</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </StyledContainer>
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

export default PointsPage
