import React from "react"

import { Section, Container } from "@components/global"

import FaqItem from "@common/FaqItem"
import ExternalLink from "@common/ExternalLink"

const FAQS = [
  {
    title: "Where/When is Hype Night?",
    content: () => (
      <>
        <a href="https://g.page/CafeCampus?share">
          Cafe Campus (57 Rue Prince Arthur E).
        </a>
        <br />
        Doors open at 8PM on January 29th, 2020.
      </>
    ),
  },
  {
    title: "What is Hype Night?",
    content: () => (
      <>
        Hype Night is an opportunity for people to get a taste of what Faculty
        Olympics is like and have a great time while doing it. We promise after
        Hype Night you’ll be even more inclined to sign up for Faculty Olympics!
      </>
    ),
  },
  {
    title: "How long will Hype Night go?",
    content: () => (
      <>
        The power hour portion of the night will last, well, an hour. But you
        can stay as long as your heart desires! There will be plenty of time to
        enjoy the dancing and partying that makes Cafe, Cafe.
      </>
    ),
  },
  {
    title: "Who can I go to for help during the event for any reason?",
    content: () => (
      <>
        Great question! You can come to anyone on Committee at any point during
        the event if you have any questions, comments or concerns. Committee
        members will have distinctive outfits and will be very noticeable so
        come chat!
      </>
    ),
  },
  {
    title: "What should I wear to Hype Night?",
    content: () => (
      <>
        Power hour events can get quite messy with inadvertent spraying and
        pouring and the like...wear something you don’t care about! Old
        sneakers, worn shirt, maybe even swim googles, whatever. Not the time to
        flex your designer brands 😉.
      </>
    ),
  },
  {
    title: "Why should I do Hype Night?",
    content: () => (
      <>
        Ask anyone who’s ever done a power hour this question, and then YOU tell
        ME why you SHOULDN’T do Hype Night!
      </>
    ),
  },
  {
    title: "Where and when can I pickup my bracelet?",
    content: () => (
      <>
        Bracelets will be available for pickup on January 27th-29th from 9AM-4PM
        in the SSMU VP Internal's Office. The SSMU Office is located in the
        Basement of the{" "}
        <a hreh="https://goo.gl/maps/wiw64bQyrvNde8Aj6">Brown Building.</a>
      </>
    ),
  },
]

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
)

export default Faq
