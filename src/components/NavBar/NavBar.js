import React from "react"
import { Image } from "semantic-ui-react"
import { Navbar, Nav } from "react-bootstrap"
import "./NavBar.scss"
import Logo from "../../images/logo.png"

export default function NavBarMenu() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="navbar"
    >
      <Navbar.Brand href="/">
        <Image src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">Portafolio</Nav.Link>
          <Nav.Link eventKey={2} href="/about">
            ¿Quién Soy?
          </Nav.Link>
          <Nav.Link eventKey={3} href="https://wa.link/szvz94">
            ¿Cómo puedo ayudarte?
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
