import React from "react"
import Layout from "@common/Layout"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <br />
          <Link to={closeTo}>Close</Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
