import React, { Component } from 'react';
import './App.css';
import { skills } from './assets/assets'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
