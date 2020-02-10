import React from "react"
import theme from "@styles/theme"
import { useAuth } from "react-use-auth"

const buttonStyles = {
  fontSize: "18px",
  textAlign: "center",
  color: theme.color.white.regular,
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: theme.color.primary,
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Login = () => {
  const { isAuthenticated, login, logout, isAuthenticating } = useAuth()

  if (isAuthenticated()) {
    return (
      <>
        <button style={buttonStyles} onClick={logout}>
          Logout
        </button>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  } else {
    return (
      <>
        <button style={buttonStyles} onClick={login}>
          Log In
        </button>
        <small>{isAuthenticating ? "Verifying ..." : null}</small>
      </>
    )
  }
}

export default Login
