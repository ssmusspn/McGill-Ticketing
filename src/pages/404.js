import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"

import { Container } from "@components/global"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Navbar />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
    <Footer />
  </Layout>
)

export default NotFoundPage
