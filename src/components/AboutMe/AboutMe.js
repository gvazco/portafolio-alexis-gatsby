import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>
        Soy Licenciado en Diseño Gráfico Digital egresado de la Universidad
        Tecnológica de México, tengo 27 años y cuento con un posgrado en Diseño
        Multimedia. Me apasiona el campo visual, como la fotografía, las artes
        gráficas, la animación y video. Actualmente trabajo más de cerca en el
        área 3D, modelando displays exhibidores, stands y diseño de interiores,
        creación de artes o gráficos, para esta misma aplicación. Me concidero
        un creativo ya que todo el tiempo estoy buscando ideas para resolver
        problemas en mi entorno.
      </p>
      <hr />

      <a href={CV} target="_blank">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
