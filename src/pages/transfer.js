import React from "react"
import Layout from "@common/Layout"
import TransferHeader from "@sections/TransferHeader"
import TransferAbout from "@sections/TransferAbout"
import Footer from "@sections/Footer"
import TransferWaiverVideo from "../components/sections/TransferWaiverVideo"

const TransferPage = () => (
  <Layout>
    <TransferHeader />
    <TransferAbout />
    <TransferWaiverVideo />
    <Footer />
  </Layout>
)

export default TransferPage
