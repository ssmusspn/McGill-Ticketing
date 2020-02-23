import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import styled from "styled-components"
import { Container } from "@components/global"
import Layout from "@common/Layout"

const ConsentPage = () => (
  <Layout>
    <Navbar />
    <StyledContainer>
      <div>
        <h1>Consent & Active Bystanding</h1>
        <br />
        <h2>What is consent?</h2>
        <ul>
          <li>Receiving permission in the form of an enthusiastic yes</li>
          <li>
            Communicating to your partner(s) so that everyone feels comfortable
          </li>
          <li>
            Just because someone consents to one thing DOES NOT mean they
            consent to others
          </li>
          <li>
            You are entitled to feel safe and have your boundaries respected
          </li>
          <li>
            Consent is <b>ALWAYS</b> necessary
          </li>
          <li>
            Consent <b>CANNOT</b> be given when:
          </li>
          <li>Someone is unconscious/sleeping</li>
          <li>Someone is incapacitated by drugs/alcohol</li>
          <li>
            There is use of coercion, threats, intimidation, or bodily harm
          </li>
          <li>Someone has given consent on your behalf</li>
          <li>Someone is in a position of authority</li>
          <li>
            If you are unsure if someone can give their consent, then{" "}
            <b>THERE IS NO CONSENT</b>
          </li>
        </ul>
        <br />
        <h2>What is an active bystander?</h2>
        <p>
          While you rush to collect your coins this week, it's important to take
          a second and check up on your friends and fellow players to ensure a
          fun and safe time for everyone. A bystander is anyone who is a witness
          to an event or situation, but is not the person it is directed
          towards. A passive bystander chooses not to interrupt or intervene to
          make a difference.{" "}
          <i>
            An active bystander takes the initiative to help in situations of
            concern and makes a positive difference before, during, or after the
            event or situation takes place.
          </i>
          <br />
          <b>Steps to intervening:</b>
          <ol>
            <li>Noticing</li>
            <li>Interpreting a situation </li>
            <li>
              Assuming responsibility. Remember the 4 D’s. Choose which form of
              intervention you feel comfortable and safe with:
              <ul>
                <li>
                  <b>(Be) Direct:</b> approach the situation directly, i.e. go
                  up to them and ask “how’s it going?”
                </li>
                <li>
                  <b>Delegate:</b> find another person to intervene on your
                  behalf, i.e. ask their riend, a server, a Coordinator, etc to
                  check on them
                </li>
                <li>
                  <b>Distract:</b> anything to break the flow of potential
                  violence, i.e. spilling a drink, start talking to the people
                  involved, ask to go to the bathroom
                </li>
                <li>
                  <b>Do something:</b> when in doubt, do something, even it it’s
                  following up after the event
                </li>
              </ul>
            </li>
            <li>Attempt to help consensually</li>
          </ol>
          <p>
            <b>IDENTITY MATTERS:</b> Certain identities are at higher risk for
            assault/harassment. Your own identity also influences how you may or
            may not intervene.
            <br />
            <b>SAFETY MATTERS:</b> Identifying personal strengths is important
            when considering how to intervene. Your safety is paramount; if you
            think you’ll be at risk, do not intervene.
            <br />
            <b>CONSENT MATTERS:</b> When possible, ask for consent before
            getting involved.
            <br />
          </p>
        </p>
        <h2>Resources</h2>
        <p>
          <b>What is SACOMSS </b>The Sexual Assault Centre of the McGill
          Students’ Society provides a safe, non-judgemental space where all
          survivors of sexual violence and their allies are believed and
          supported. SACOMSS is open to people of all genders in the McGill and
          Montreal community. For more information about hours and services,
          check out their website,{" "}
          <a href="https://sacomss.org">sacomss.org </a>
          or call their support line at (514) 398-8500.
        </p>
        <br />
        <h3>Other Resources</h3>
        <ul>
          <li>
            <strong>McGill Nightline: </strong> 514-398-6246,
            <a href="http://ssmu.mcgill.ca/nightline">
              http://ssmu.mcgill.ca/nightline
            </a>
          </li>

          <li>
            <strong>
              Office for Sexual Violence, Response, Support, and Education:
            </strong>
            <a href="http://www/mcgill/ca/osvrse/">
              http://www/mcgill/ca/osvrse/
            </a>
          </li>

          <li>
            <strong>McGill Peer Support Centre: </strong>
            <a href="http://ssmu.mcgill.ca/psc">http://ssmu.mcgill.ca/psc</a>
          </li>

          <li>
            <strong>Tel-Aide:</strong> 514-935-1101,{" "}
            <a href="http://www.telaide.org/en">http://www.telaide.org/en</a>
          </li>

          <li>
            <strong>Montreal Sexual Assault Centre: </strong> 1-888-933-9007
            (toll free), 514-934-4504,{" "}
            <a href="http://www.cvasm.org">http://www.cvasm.org</a>
          </li>
        </ul>
      </div>
    </StyledContainer>
    <Footer />
  </Layout>
)

export default ConsentPage

const StyledContainer = styled(Container)`
  padding-top: 25px;
`
