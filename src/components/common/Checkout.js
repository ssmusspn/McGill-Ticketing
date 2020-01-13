import React from "react"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#FBAB22",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_live_Zmy7SK2Jto5z2lgtVrk3Z77R00Fs0ql9lR")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_GXdwTLRYT7v7zS", quantity: 1 }],
      successUrl: `https://sspn.ca/success`,
      cancelUrl: `https://sspn.ca/cancel`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => {
          if (document.getElementById("IRPcheckbox").checked) {
            this.redirectToCheckout(event)
          }
        }}
      >
        BUY A HYPE NIGHT TICKET
      </button>
    )
  }
}
export default Checkout
