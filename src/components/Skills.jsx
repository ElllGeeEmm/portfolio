import React from 'react'
import { skills } from '../assets/assets'

const Skills = (props) => (
  <>
    <h2>Skills</h2>
    <div className='skills-list'>
      {skills.map(skill=>(
        <div className='skill' key={skill.name}>
          <h3 className='skill-name'>{skill.name}</h3>
          <img src={skill.img} className='skills-img'/>
        </div>
      ))}
    </div>
  </>
)

export default Skills
