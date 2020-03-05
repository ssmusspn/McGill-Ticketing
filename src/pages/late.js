import React from "react"
import Layout from "@common/Layout"
import PowerHourHeader from "@sections/PowerHourHeader"
import About from "@sections/About"
import Footer from "@sections/Footer"
import LateWaiverVideo from "@components/sections/LateWaiverVideo"

const TransferPage = () => (
  <Layout>
    {/* <PowerHourHeader /> */}
    <About />
    <LateWaiverVideo />
    <Footer />
  </Layout>
)

export default TransferPage
