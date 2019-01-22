import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="name">
                    Pratyakash Saini
                </div>
                <div className="description">
                    <h1>Hi, I am Front End Developer <span className="special">#ReactJS </span>creates website that run across platforms & devices</h1>
                </div>
                <div className="connect">
                    <a href>Gmail</a>
                    <a href>Github</a>
                    <a href>Resume</a>
                </div>
            </div>
        );
    }
}

export default Intro;