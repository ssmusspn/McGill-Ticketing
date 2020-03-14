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
            <h2>Important note on the shortened FacO</h2>
            <p>
              Due to the cancellation of Power Hour and Friday's events, BOAT
              races held a much larger relative weight of the scores. To
              counteract this, Monday, Tuesday and Thursday's points were given
              a 1.5x multiplier so that the relative weighting of BOAT races
              with the other events is comparable to the planned total.
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
                <th title="Field #9">Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="right">1</td>
                <td>Science 2</td>
                <td>29,371</td>
                <td>2,485</td>
                <td>1,725</td>
                <td>8,288</td>
                <td>13,575</td>
                <td>2,869</td>
                <td align="right">430</td>
              </tr>
              <tr>
                <td align="right">2</td>
                <td>Arts 1</td>
                <td>26,816</td>
                <td>2,651</td>
                <td>1,913</td>
                <td>7,388</td>
                <td>9,150</td>
                <td>5,100</td>
                <td align="right">615</td>
              </tr>
              <tr>
                <td align="right">3</td>
                <td>PTOT</td>
                <td>23,146</td>
                <td>2,797</td>
                <td>975</td>
                <td>6,788</td>
                <td>7,600</td>
                <td>4,706</td>
                <td align="right">280</td>
              </tr>
              <tr>
                <td align="right">4</td>
                <td>Arts 3</td>
                <td>22,625</td>
                <td>1,916</td>
                <td>653</td>
                <td>5,250</td>
                <td>10,625</td>
                <td>3,881</td>
                <td align="right">300</td>
              </tr>
              <tr>
                <td align="right">5</td>
                <td>Music</td>
                <td>22,437</td>
                <td>2,216</td>
                <td>1,838</td>
                <td>6,450</td>
                <td>6,725</td>
                <td>4,744</td>
                <td align="right">465</td>
              </tr>
              <tr>
                <td align="right">6</td>
                <td>Engineering</td>
                <td>20,686</td>
                <td>1,701</td>
                <td>1,613</td>
                <td>4,538</td>
                <td>7,200</td>
                <td>5,175</td>
                <td align="right">460</td>
              </tr>
              <tr>
                <td align="right">7</td>
                <td>Management 1</td>
                <td>18,662</td>
                <td>598</td>
                <td>675</td>
                <td>5,813</td>
                <td>7,475</td>
                <td>4,031</td>
                <td align="right">70</td>
              </tr>
              <tr>
                <td align="right">8</td>
                <td>Education 2</td>
                <td>17,435</td>
                <td>1,682</td>
                <td>1,373</td>
                <td>3,450</td>
                <td>5,225</td>
                <td>5,640</td>
                <td align="right">65</td>
              </tr>
              <tr>
                <td align="right">9</td>
                <td>Education 1</td>
                <td>15,552</td>
                <td>2,596</td>
                <td>1,073</td>
                <td>3,113</td>
                <td>3,825</td>
                <td>4,781</td>
                <td align="right">165</td>
              </tr>
              <tr>
                <td align="right">10</td>
                <td>Management 2</td>
                <td>15,043</td>
                <td>1,167</td>
                <td>563</td>
                <td>3,525</td>
                <td>6,775</td>
                <td>2,974</td>
                <td align="right">40</td>
              </tr>
              <tr>
                <td align="right">11</td>
                <td>Medicine</td>
                <td>14,700</td>
                <td>854</td>
                <td>1,050</td>
                <td>6,150</td>
                <td>2,600</td>
                <td>4,031</td>
                <td align="right">15</td>
              </tr>
              <tr>
                <td align="right">12</td>
                <td>Science 1</td>
                <td>14,571</td>
                <td>1,908</td>
                <td>488</td>
                <td>5,438</td>
                <td>3,825</td>
                <td>2,663</td>
                <td align="right">250</td>
              </tr>
              <tr>
                <td align="right">13</td>
                <td>Arts 2</td>
                <td>13,404</td>
                <td>810</td>
                <td>600</td>
                <td>5,363</td>
                <td>3,650</td>
                <td>2,831</td>
                <td align="right">150</td>
              </tr>
              <tr>
                <td align="right">14</td>
                <td>Law</td>
                <td>12,087</td>
                <td>1,033</td>
                <td>998</td>
                <td>2,063</td>
                <td>4,425</td>
                <td>3,469</td>
                <td align="right">100</td>
              </tr>
              <tr>
                <td align="right">15</td>
                <td>Arts 5</td>
                <td>11,417</td>
                <td>198</td>
                <td>1,088</td>
                <td>3,450</td>
                <td>4,550</td>
                <td>2,006</td>
                <td align="right">125</td>
              </tr>
              <tr>
                <td align="right">16</td>
                <td>Arts 4</td>
                <td>10,393</td>
                <td>949</td>
                <td>1,163</td>
                <td>2,513</td>
                <td>2,850</td>
                <td>2,869</td>
                <td align="right">50</td>
              </tr>
            </tbody>
          </table>
          <h2>Faculty</h2>
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1">Rank</th>
                <th title="Field #2">Faculty</th>
                <th title="Field #3">Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="right">1</td>
                <td>PTOT</td>
                <td>23,146</td>
              </tr>
              <tr>
                <td align="right">2</td>
                <td>Music</td>
                <td>22,437</td>
              </tr>
              <tr>
                <td align="right">3</td>
                <td>Engineering</td>
                <td>22,625</td>
              </tr>
              <tr>
                <td align="right">4</td>
                <td>Science</td>
                <td>20,110</td>
              </tr>
              <tr>
                <td align="right">5</td>
                <td>Medicine</td>
                <td>18,662</td>
              </tr>
              <tr>
                <td align="right">6</td>
                <td>Arts</td>
                <td>16,931</td>
              </tr>
              <tr>
                <td align="right">7</td>
                <td>Management</td>
                <td>18,119</td>
              </tr>
              <tr>
                <td align="right">8</td>
                <td>Education</td>
                <td>15,298</td>
              </tr>
              <tr>
                <td align="right">9</td>
                <td>Law</td>
                <td>12,087</td>
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
