import React, { useState, useEffect } from 'react';
import { projects } from '../assets/assets'
import { Container, Header } from 'semantic-ui-react'
import Desktop from '../deviceComponents/Desktop'
import useInterval from "../hooks/useInterval"

const INTERVAL = 3000;

const ProjectBrowser = (props) => {
  const [currentProject, setCurrentProject] = useState(0)
  const [paused, setPaused] = useState(false)
  const [interval, setInterval] = useState(INTERVAL)
  
  const handleNextProject = () => {    
    setInterval(null)
    if (currentProject + 1 < projects.length) {
      setCurrentProject(currentProject + 1)
    } else {
      setCurrentProject(0)
    }
  }

  const handlePause = () => {
    setPaused(!paused); 
    setInterval(null) 
  }

  useInterval(handleNextProject, interval)
  useEffect(() => {
    if (!paused) {
      setInterval(INTERVAL)
    }
  }, [interval, paused])

  return(
    <Container style={{ marginTop: '3em' }}>
      <Header as='h2' style={{ fontSize: '2.8em' }}>Projects</Header>
      <Desktop
        project={projects[currentProject]}
        handlePause={handlePause}
      />
    </Container>
  )
}

export default ProjectBrowser
