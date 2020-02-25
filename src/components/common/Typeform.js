import React from "react"
import { Section, Container } from "@components/global"
import styled from "styled-components"
import TypeformPowerHour from "./TypeformPowerHour"

class Typeform extends React.Component {
  render() {
    return (
      <StyledSection id="Typeform">
        <StyledContainer>
          <TypeformPowerHour />
        </StyledContainer>
      </StyledSection>
    )
  }
}

export default Typeform

const StyledSection = styled(Section)`
  display: none;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`
