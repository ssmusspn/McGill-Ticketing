import React from "react"

import { useAuth } from "react-use-auth"
import YouTube from "react-youtube"
import { Section, Container } from "@components/global"

const WaiverVideo = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
    },
  }
  const { isAuthenticated, user } = useAuth()

  if (isAuthenticated()) {
    return (
      <Section id="video">
        <Container>
          <div>
            <h2>Waiver Video</h2>
            <br></br>
            <p>
              You’ve either been to either of these things before and that’s all
              you need to hear, or you’re about to find out about what will be
              the best night of your life.
            </p>
          </div>
          <div>
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
          </div>
        </Container>
      </Section>
    )
  } else {
    return <Section id="video"></Section>
  }
}

export default WaiverVideo
