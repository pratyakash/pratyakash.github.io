import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="name">
                    Pratyakash Saini
                </div>
                <div className="description">
                    <h1>Hi, I am Front End Developer <a className="special" href="https://reactjs.org/" target="_black" >#ReactJS </a>creates website that run across platforms & devices</h1>
                </div>
                <div className="connect">
                    <a href>#Gmail</a>
                    <a href>#Github</a>
                    <a href>#Curriculum Vitae</a>
                </div>
            </div>
        );
    }
}

export default Intro;