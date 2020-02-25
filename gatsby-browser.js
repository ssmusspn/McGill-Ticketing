import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    callback_domain="https://sspn.ca"
    auth0_domain="sspn.auth0.com"
    auth0_client_id="KIqLrbM3k8yGVuCCRY7yCrzZuRmOlwEB"
  >
    {element}
  </AuthProvider>
)
