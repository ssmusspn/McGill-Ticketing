import React, { useEffect } from "react"
import { useAuth } from "react-use-auth"
import { Container } from "@components/global"
import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Footer from "@sections/Footer"

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication()
  }, [])

  return (
    <Layout>
      <Navbar />
      <Container>
        <h2>
          This is the auth callback page, you should be redirected immediately.
        </h2>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Auth0CallbackPage
