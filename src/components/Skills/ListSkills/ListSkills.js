import React from "react"
import loadable from "@loadable/component"
import "./ListSkills.scss"

const SkillBar = loadable(() => import("react-skills-bars"))

export default function ListSkills(props) {
  const { skills, colors } = props

  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={1500}
      />
    </div>
  )
}
