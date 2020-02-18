import React from "react"

import { useAuth } from "react-use-auth"
import YouTube from "react-youtube"
import { Section, Container } from "@components/global"
import Typeform from "@common/Typeform"

const WaiverVideo = () => {
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
  const { isAuthenticated } = useAuth()

  function onPlayerStateChange(event) {
    if (event.data === 0) {
      document.getElementById("Typeform").style.display = "block"
    }
  }

  if (isAuthenticated()) {
    return (
      <Section id="video">
        <Container>
          <div>
            <h2>Waiver Video</h2>
            <br></br>
            <p>
              Please watch the wavier video in it's entirety. You will not be
              able to continue until it has been completed.
            </p>
          </div>
          <div>
            <YouTube
              videoId="oyj2I9y2VN4"
              opts={opts}
              onStateChange={onPlayerStateChange}
            />
          </div>
          <Typeform />
        </Container>
      </Section>
    )
  } else {
    return <Section id="video"></Section>
  }
}

export default WaiverVideo
