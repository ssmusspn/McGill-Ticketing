import React from "react"
import { Section, Container } from "@components/global"
import styled from "styled-components"
import TypeformStaff from "./TypeformStaff"
import TypeformLate from "./TypeformLate"
import TypeformPre from "./TypeformPre"

class Typeform extends React.Component {
  render() {
    return (
      <StyledSection id="Typeform">
        <StyledContainer>
          <TypeformStaff />
          <TypeformLate />
          <TypeformPre />
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
