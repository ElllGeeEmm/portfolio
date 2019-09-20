import React, { useState } from 'react'
import useInterval from "../hooks/useInterval"
import { Icon } from "semantic-ui-react"
import "./hero.css"

const firstNameStatic = "Robert";
const lastNameStatic = "Morrissey";
const descriptions = ["Software Engineer", "Web Developer", "Dog Lover", "Full Stack Developer"]

export default function Hero() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [currentDescription, setCurrentDescription] = useState(0);
  const [pause, setPause] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [cursor, setCursor] = useState(1);
  const [blink, setBlink] = useState(false);

  useInterval(()=>{
    if(firstName.length < firstNameStatic.length) {      
      setFirstName(firstName + firstNameStatic[firstName.length])
    } else if (lastName.length < lastNameStatic.length) {
      setCursor(2)
      setLastName(lastName + lastNameStatic[lastName.length])
    } else if (description.length < descriptions[currentDescription].length) {
      setCursor(3)
      setDescription(description + descriptions[currentDescription][description.length])
    } else if (description.length === descriptions[currentDescription].length && !blink) {
      setBlink(true)
    } else if (pause < 20) {
      setPause(pause + 1);
    } else if (!highlight || pause < 30) {
      setPause(pause + 1);
      setHighlight(true)
      setCursor(0)
      setBlink(false)
    } else if (currentDescription + 1 < descriptions.length) {
      setDescription('')
      setCurrentDescription(currentDescription + 1)
      setPause(0);
      setHighlight(false);
      setBlink(false)
    } else {
      setDescription('')
      setCurrentDescription(0)
      setPause(0);
      setHighlight(false);
    }
  }, 80)
  
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-item">
          <span className="hero-firstName-content">{firstName}</span>
          <div className={cursor === 1 ? "cursor" : ""} />
        </div>
        <div className="hero-item">
          <span className="hero-lastName-content">{lastName}</span>
          <div className={cursor === 2 ? "cursor" : ""} />
        </div>
        <div className="hero-item hero-description">
          <span 
            className={`hero-description-content ${highlight ? "highlight" : ""}`}
          >
            {description}
          </span>
          <div className={`${cursor === 3 ? "cursor" : ""} ${blink ? "blink" : ""}`} />
        </div>
        <div className="hero-links">
          <a
            className="hero-icon-link"
            href="https://github.com/ElllGeeEmm/"
            target='_blank'
            rel="noopener noreferrer"
          >
            <Icon
              link
              name="github"
            />
          </a>
          <a
            className="hero-icon-link"
            href="https://twitter.com/RobertM52261496"
            target='_blank'
            rel="noopener noreferrer"
          >
            <Icon
              link
              name="twitter"
            />
          </a>
          <a
            className="hero-icon-link"
            href="https://www.linkedin.com/in/robert-c-morrissey/"
            target='_blank'
            rel="noopener noreferrer"
          >
            <Icon
              link
              name="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
