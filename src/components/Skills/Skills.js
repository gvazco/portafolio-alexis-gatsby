import React from "react"
import { Container } from "semantic-ui-react"
import ListSkills from "./ListSkills"
import {
  personalSkills,
  personalSkillsColors,
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
} from "../../utils/skills"
import "./Skills.scss"

export default function Index() {
  return (
    <Container className="skills">
      <div className="skills__block">
        <h2>Hablilidades</h2>
        <ListSkills skills={personalSkills} colors={personalSkillsColors} />
      </div>
      <div className="skills__block">
        <h2>Software</h2>
        <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
      </div>
      <div className="skills__block">
        <h2>Sistema Operativo</h2>
        <ListSkills skills={backendSkills} colors={backendSkillsColors} />
      </div>
    </Container>
  )
}
