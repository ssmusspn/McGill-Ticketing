import React from "react"

import Layout from "@common/Layout"

import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"
import WaiverVideo from "../components/sections/WaiverVideo"

const VideoPage = () => (
  <Layout>
    <Navbar />
    <WaiverVideo />
    <Footer />
  </Layout>
)

export default VideoPage
