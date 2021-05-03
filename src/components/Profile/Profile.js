import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import profileImage from "../../images/avatar.jpg"
import AboutMe from "../AboutMe"
import "./Profile.scss"

const data = [
  {
    title: "Edad:",
    info: "27 años",
  },
  {
    title: "Dirección:",
    info: "Ricardo Flores Magón 73, Izcalli Chamapa, Naucalpan, EdoMéx.",
  },
  {
    title: "E-Mail:",
    info: "alexisveco@outlook.com",
  },
  {
    title: "Telefono:",
    info: "55 6371-9043",
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <p>Alexis Velázquez</p>
            <p>Diseñador Gráfico</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <AboutMe />
      </Container>
    </div>
  )
}
