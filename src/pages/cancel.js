import React from "react"

import { Container } from "@components/global"
import ConditionalLayout from "@components/ConditionalLayout"
import { Link } from "gatsby-plugin-modal-routing"

const IRPpage = () => (
  <ConditionalLayout>
    <Container>
      <h1>Order Failed</h1>
      <Link>Return Home</Link>
    </Container>
  </ConditionalLayout>
)

export default IRPpage
