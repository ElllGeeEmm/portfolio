import React from 'react'
import { projects } from '../assets/assets'
import gitIcon from '../assets/github-icon.svg'
import { Link } from 'react-router-dom'

const Projects = props => (
  <>
    <h2>Projects</h2>
    {projects.map(project => (
      <div className='project' key={project.name}>
        <a href={project.link} className='project-img'>
          <img src={project.img} className='project-img'/>
        </a>
        <div className='project-container relative'>
          <p className='project-desc'>{project.description}</p>
          <a href={project.github} className='gitIcon project-icon absolute'>
            <img src={gitIcon} className='gitIcon'/>
          </a>
        </div>
      </div>
    ))}
  </>
)

export default Projects
