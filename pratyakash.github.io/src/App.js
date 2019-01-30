import React, { Component } from 'react';
import './resources/style.css';
import './resources/imagehover.min.css';
import Header from './components/header_footer/Header';

import Intro from './components/Introduction/Intro';
import Projects from './components/Projects/project'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Projects />
      </div>
    );
  }
}

export default App;
