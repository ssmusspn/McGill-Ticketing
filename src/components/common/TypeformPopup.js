import React from "react"
import { Section, Container } from "@components/global"
import { ReactTypeformEmbed } from "react-typeform-embed"
import theme from "@styles/theme"
import styled from "styled-components"

const buttonStyles = {
  fontSize: "28px",
  textAlign: "center",
  color: theme.color.white.regular,
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: theme.color.primary,
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

class TypeformPopup extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    this.typeformEmbed.typeform.open()
  }

  render() {
    return (
      <StyledSection id="Typeform">
        <StyledContainer>
          <div className="TypeformPopup">
            <ReactTypeformEmbed
              popup
              autoOpen={false}
              url="https://sspn.typeform.com/to/n596qJ"
              hideHeaders
              hideFooter
              buttonText="Go!"
              style={{ top: 100 }}
              ref={tf => {
                this.typeformEmbed = tf
              }}
            />
            <button
              className="btn"
              onClick={this.openForm}
              style={buttonStyles}
            >
              Purchase Your Ticket
            </button>
          </div>
        </StyledContainer>
      </StyledSection>
    )
  }
}

export default TypeformPopup

const StyledSection = styled(Section)`
  display: none;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`
