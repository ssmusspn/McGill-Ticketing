import React from "react"

import YouTube from "react-youtube"
import { Section, Container } from "@components/global"
import TypeformLate from "@common/TypeformLate"

const LateWaiverVideo = () => {
  const opts = {
    height: "658",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
    },
  }

  function onPlayerStateChange(event) {
    if (event.data === 0) {
      document.getElementById("Typeform").style.display = "block"
    }
  }
  return (
    <Section id="video">
      <Container>
        <div>
          <h2>(Late) Purhcase a FacO Ticket.</h2>
          <br></br>
          <p>
            To complete purchase your ticket, please watch the waiver video in
            it's entirety then complete the form below.
          </p>
        </div>
        <div>
          <YouTube
            videoId="oyj2I9y2VN4"
            opts={opts}
            onStateChange={onPlayerStateChange}
          />
        </div>
        <TypeformLate />
      </Container>
    </Section>
  )
}

export default LateWaiverVideo
