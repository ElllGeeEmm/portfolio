import React from 'react'
import "./projectInfo.css"
import { Icon } from "semantic-ui-react"

export default function ProjectInfo({project}) {
  
  return (
    <div className="project-info">
      <h2 className="project-title">
        {project.name}
      </h2>
      <p className="project-description">
        {project.description}
      </p>
      <div className="project-links">
        <a
          className="project-icon-link"
          href={project.github}
          target='_blank'
          rel="noopener noreferrer"
        >
          <Icon 
            link
            name="github"
          />
        </a>
        <a
          className="project-icon-link"
          href={project.link}
          target='_blank'
          rel="noopener noreferrer"
        >
          <Icon
            link
            name="external"
          />
        </a>
      </div>
    </div>
  )
}
