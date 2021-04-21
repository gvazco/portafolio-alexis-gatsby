import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SocialMedia from "../../components/SocialMedia"
import "./Footer.scss"

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="submenu">
          <ul className="footer-menu">
            <li>
              <a>¿Quién soy?</a>
            </li>
            <li>
              <a>¿Cómo puedo ayudarte?</a>
            </li>
          </ul>
        </Col>
        <Col className="social-media">
          <SocialMedia />
        </Col>
        <Col className="contacto">
          Email:alexveco@outlook.com
          <br />
          <span>Diseño por: DISTURBIO ILUSTRATIVO</span>
        </Col>
      </Row>

      <span>© </span>
      <span>
        2021 ALEXIS VELÁZQUEZ PORTFOLIO <br /> All Right Reserved.
      </span>
      <span></span>
    </Container>
  )
}
