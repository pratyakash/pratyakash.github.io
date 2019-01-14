import React, { Component } from 'react';
import './resources/style.css';
import Header from './components/header_footer/Header';
import Particle from './components/Particle/Particle';

import Intro from './components/Introduction/Intro'


class App extends Component {
  render() {
    return (
      <div>
        <Particle />
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
