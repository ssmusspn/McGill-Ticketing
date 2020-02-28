import React from "react"

import YouTube from "react-youtube"
import { Section, Container } from "@components/global"
import TypeformPowerHour from "@common/TypeformPowerHour"

const PowerHourWaiverVideo = () => {
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
          <h2>Single Night Tickets</h2>
          <br></br>
          <p>
            To purchase a single night ticket, please watch the waiver video in
            it's entirety and purcahse the button that appears at the end.
          </p>
        </div>
        <div>
          <YouTube
            videoId="oyj2I9y2VN4"
            opts={opts}
            onStateChange={onPlayerStateChange}
          />
        </div>
        <TypeformPowerHour />
      </Container>
    </Section>
  )
}

export default PowerHourWaiverVideo
