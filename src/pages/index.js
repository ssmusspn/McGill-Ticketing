import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import Header from "@sections/Header"
import About from "@sections/About"
// import Faq from "@sections/Faq"
import Footer from "@sections/Footer"
import WaiverVideo from "../components/sections/WaiverVideo"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <WaiverVideo />
    <Footer />
  </Layout>
)

export default IndexPage
