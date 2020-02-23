import React from "react"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import General from "@sections/General"

import Layout from "@common/Layout"

const GeneralPage = () => (
  <Layout>
    <Navbar />
    <General />
    <Footer />
  </Layout>
)

export default GeneralPage
