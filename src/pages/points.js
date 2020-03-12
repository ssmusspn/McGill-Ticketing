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
          <h2>Team</h2>
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
                <td>Science 2</td>
                <td>23,115</td>
                <td>2,485</td>
                <td>1,150</td>
                <td>5,525</td>
                <td>13,575</td>
                <td>-</td>
                <td>-</td>
                <td>380</td>
              </tr>
              <tr>
                <td align="right">2</td>
                <td>Arts 1</td>
                <td>18,516</td>
                <td>2,651</td>
                <td>1,275</td>
                <td>4,925</td>
                <td>9,150</td>
                <td>-</td>
                <td>-</td>
                <td>515</td>
              </tr>
              <tr>
                <td align="right">3</td>
                <td>Arts 3</td>
                <td>16,776</td>
                <td>1,916</td>
                <td>435</td>
                <td>3,500</td>
                <td>10,625</td>
                <td>-</td>
                <td>-</td>
                <td>300</td>
              </tr>
              <tr>
                <td align="right">4</td>
                <td>PTOT</td>
                <td>15,767</td>
                <td>2,797</td>
                <td>650</td>
                <td>4,525</td>
                <td>7,600</td>
                <td>-</td>
                <td>-</td>
                <td>195</td>
              </tr>
              <tr>
                <td align="right">5</td>
                <td>Music</td>
                <td>14,931</td>
                <td>2,216</td>
                <td>1,225</td>
                <td>4,300</td>
                <td>6,725</td>
                <td>-</td>
                <td>-</td>
                <td>465</td>
              </tr>
              <tr>
                <td align="right">6</td>
                <td>Engineering</td>
                <td>13,361</td>
                <td>1,701</td>
                <td>1,075</td>
                <td>3,025</td>
                <td>7,200</td>
                <td>-</td>
                <td>-</td>
                <td>360</td>
              </tr>
              <tr>
                <td align="right">7</td>
                <td>Management 1</td>
                <td>12,468</td>
                <td>598</td>
                <td>450</td>
                <td>3,875</td>
                <td>7,475</td>
                <td>-</td>
                <td>-</td>
                <td>70</td>
              </tr>
              <tr>
                <td align="right">8</td>
                <td>Management 2</td>
                <td>10,707</td>
                <td>1,167</td>
                <td>375</td>
                <td>2,350</td>
                <td>6,775</td>
                <td>-</td>
                <td>-</td>
                <td>40</td>
              </tr>
              <tr>
                <td align="right">9</td>
                <td>Education 2</td>
                <td>10,187</td>
                <td>1,682</td>
                <td>915</td>
                <td>2,300</td>
                <td>5,225</td>
                <td>-</td>
                <td>-</td>
                <td>65</td>
              </tr>
              <tr>
                <td align="right">10</td>
                <td>Science 1</td>
                <td>9,933</td>
                <td>1,908</td>
                <td>325</td>
                <td>3,625</td>
                <td>3,825</td>
                <td>-</td>
                <td>-</td>
                <td>250</td>
              </tr>
              <tr>
                <td align="right">11</td>
                <td>Education 1</td>
                <td>9,376</td>
                <td>2,596</td>
                <td>715</td>
                <td>2,075</td>
                <td>3,825</td>
                <td>-</td>
                <td>-</td>
                <td>165</td>
              </tr>
              <tr>
                <td align="right">12</td>
                <td>Arts 2</td>
                <td>8,585</td>
                <td>810</td>
                <td>400</td>
                <td>3,575</td>
                <td>3,650</td>
                <td>-</td>
                <td>-</td>
                <td>150</td>
              </tr>
              <tr>
                <td align="right">13</td>
                <td>Medicine</td>
                <td>8,269</td>
                <td>854</td>
                <td>700</td>
                <td>4,100</td>
                <td>2,600</td>
                <td>-</td>
                <td>-</td>
                <td>15</td>
              </tr>
              <tr>
                <td align="right">14</td>
                <td>Arts 5</td>
                <td>7,898</td>
                <td>198</td>
                <td>725</td>
                <td>2,300</td>
                <td>4,550</td>
                <td>-</td>
                <td>-</td>
                <td>125</td>
              </tr>
              <tr>
                <td align="right">15</td>
                <td>Law</td>
                <td>7,498</td>
                <td>1,033</td>
                <td>665</td>
                <td>1,375</td>
                <td>4,425</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td align="right">16</td>
                <td>Arts 4</td>
                <td>6,299</td>
                <td>949</td>
                <td>775</td>
                <td>1,675</td>
                <td>2,850</td>
                <td>-</td>
                <td>-</td>
                <td>50</td>
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
