import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectBrowser from './components/ProjectBrowser'
import ContactMe from './components/ContactMe'
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe />
        <ProjectBrowser />
        <Skills />
        <ContactMe />
      </div>
    );
  }
}

export default App;
