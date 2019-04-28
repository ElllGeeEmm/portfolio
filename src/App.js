import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default App;
