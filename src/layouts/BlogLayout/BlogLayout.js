import React from "react"
import { Container } from "react-bootstrap"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import "./BlogLayout.scss"

export default function BlogLayout(props) {
  const { children, className } = props
  return (
    <div>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
