import React, { useState, useEffect } from 'react'
import ProjectInfo from './ProjectInfo'
import './desktop.css'
import useInterval from '../hooks/useInterval'

export default function Desktop({project, handlePause}) {
  const textToType = project.link.split('');
  const [typedText, setTypedText] = useState('')
  const [typing, setTyping] = useState(true);
  const [interval, setInterval] = useState(null);
  const [projectImg, setProjectImg] = useState('');
  const [hover, setHover] = useState(false)

  useInterval(() => {
    if (typedText.length < project.link.length) {
      setTypedText(typedText + textToType[typedText.length])
    } else if (typing !== false) {
      setTyping(false)
    }
  }, interval)

  useEffect(()=>{
    setTypedText('');
    setTyping(true);
    setInterval(30);
    setProjectImg(project.img);
    setHover(false)
  }, [project])

  const onHover = () => {
    handlePause();
    setHover(!hover);
  }
  
  return (
    <div className="desktop" style={{fontSize: "2em"}}>
      <div className="desktop-bezel">
        <div className="desktop-camera" />
        <div className="desktop-screen" onMouseEnter={onHover} onMouseLeave={onHover}>
          <div className="desktop-browser-bar">
            <div className="browser-bar-button-a" />
            <div className="browser-bar-button-b" />
            <div className="browser-bar-button-c" />
            <div className="browser-bar-address">
              <a href={project.link} className="browser-bar-address-link" target="_blank" rel="noopener noreferrer">
                <span>{typedText}</span><div className="address-link-cursor" />
              </a>
            </div>
          </div>
          <div className="screen-content">
            { typing ? (
              <div className="loader" />
            ) : (
              <>
                <img className='browser-img' src={projectImg} alt='yadda yadda' />
                
                <div className={`img-overlay${hover ? '-full' : ''}`}>
                  <ProjectInfo project={project} />
                </div>    
              </>
            ) }
          </div>
        </div>
        <div className="desktop-browser-button">
          <div className="desktop-browser-button-detail" />
        </div>
      </div>
    </div>
  )
}
