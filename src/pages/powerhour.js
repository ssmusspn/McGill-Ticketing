import React from "react"
import Layout from "@common/Layout"
import PowerHourHeader from "@sections/PowerHourHeader"
import About from "@sections/About"
import Footer from "@sections/Footer"
import WaiverVideo from "../components/sections/WaiverVideo"

const PowerHourPage = () => (
  <Layout>
    <PowerHourHeader />
    <About />
    <WaiverVideo />
    <Footer />
  </Layout>
)

export default PowerHourPage
