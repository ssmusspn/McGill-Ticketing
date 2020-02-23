import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"

const RulesRespectPage = () => (
  <Layout>
    <Navbar />
    <StyledContainer>
      <div>
        <h1>Rules & Respect</h1>
        <h4>
          Before you begin your adventure, there are a strict set of rules to
          follow during gameplay. Committee reserves the right to penalize all
          participants that do not adhere to the following:
        </h4>
        <br />
        <h3>On Campus</h3>
        <ul>
          <li>NO alcohol is to be consumed on McGill's Campus</li>
          <li>
            NO behaviour that involves obstructing University activities,
            including teaching, research, studying, administration, public
            services and scheduled events/activities
          </li>
          <li>NO destruction or damage of any property on campus</li>
        </ul>
        <br />
        <h3>Off Campus</h3>
        <ul>
          <li>
            ANY uncivil behviour towards other students or members of the
            Milton-Parc Community will NOT be tolerated
          </li>
          <li>
            Please respect the fact that there are many people in and around the
            McGill community that are not involved in Faculty Olympics so keep
            noise levels and behaviour reasonable
          </li>
          <li>
            Faculty Olympics has formed strong relationships with many club
            owners in Montreal and there will be serious consequences if you
            jeopardize these relationships
          </li>
          <li>Do NOT steal anything from, damage or vandalize venues</li>
          <li>Do NOT try to fight/argue with venue staff</li>
          <li>Bring valid government ID to ALL venues</li>
          <li>
            Do NOT drop or throw anything from the upper levels of 2 story
            venues (e.g. Café Campus, Foufounes Electrique)
          </li>
        </ul>
        <br />
        <h3>Drugs</h3>
        <p>
          <strong>
            The use of drugs at Faculty Olympics is STRICTLY PROHIBITED.
          </strong>
          Anyone suspected of using any illicit substances (including cannabis)
          will immediately be removed from the event, with the possibility of
          being barred from all future Faculty Olympics and other SSPN events
        </p>
        <br />
        <h3>Violence</h3>
        <p>
          ANY form of physical violence, sexual violence, threat of violence or
          damage to someone's property will NOT be tolerated at Faculty Olympics
          and will result in immediate removal from the event with the
          possibility of being barred from all future Faculty Olympics and other
          SSPN events. This may also result in possible follow-up proceedings
          with the Office of the Dean of Students.
        </p>
        <p>
          <i>
            Songs, chants, and presentations may not contain any of the
            following:
          </i>
        </p>
        <ul>
          <li>Team members in a sexually dominating position</li>
          <li>Race</li>
          <li>National/ethnic origin</li>
          <li>Colour</li>
          <li>Religion</li>
          <li>Sex</li>
          <li>Gender identification</li>
          <li>Class</li>
          <li>Age</li>
          <li>Mental/physical disability</li>
          <li>Sexual Orientation</li>
        </ul>
        <br />
        <h3>Social Media</h3>
        <ul>
          <li>
            All photos you wouldn't feel comfortable showing a future employer
            should NOT be posted to social media
          </li>
          <li>
            DO NOT speak to the media about Faculty Olympics in any way, shape
            or form
          </li>
          <li>
            <strong>
              If you are ever approached by the media, please redirect them to{" "}
              <a href="mailto:internal@ssmu.ca">Sanchi Bhalla</a>, the SSMU VP
              Internal Affairs
            </strong>
          </li>
        </ul>
        <br />
        <p>
          <i>
            Violations of any of these rules could result in severe point
            deduction to your team, with the possibilities of removal from
            Faculty Olympics, restriction from all future Faculty Olympics/SSPN
            events, as well as a follow-up from the Office of the Dean of
            Students of McGill University.
          </i>
        </p>
        <p>
          Captains are responsible for ensuring that everyone on the team is
          fully aware of these rules and abides by them. Any participants that
          are deemed out of line by the coordinators of Faculty Olympics will be
          penalized.
        </p>
      </div>
    </StyledContainer>
    <Footer />
  </Layout>
)

export default RulesRespectPage

const StyledContainer = styled(Container)`
  padding-top: 25px;
`
