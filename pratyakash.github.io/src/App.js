import React, { Component } from 'react';
import './resources/scss/style.scss';
import './resources/imagehover.min.css';
import Header from './components/header_footer/Header';

import Intro from './components/Introduction/Intro';
import Projects from './components/Projects/project';
import Skills from './components/Skills/skills'


class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Intro />
        {/* <Projects /> */}
        <Skills />
      </div>
    );
  }
}

export default App;
