import React from "react"
import Layout from "@common/Layout"
import PowerHourHeader from "@sections/PowerHourHeader"
import About from "@sections/About"
import Footer from "@sections/Footer"
import PowerHourWaiverVideo from "../components/sections/PowerHourWaiverVideo"

const PowerHourPage = () => (
  <Layout>
    <PowerHourHeader />
    <About />
    <PowerHourWaiverVideo />
    <Footer />
  </Layout>
)

export default PowerHourPage
