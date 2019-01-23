import React, { Component } from 'react';
import first from '../../resources/images/first.png'

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project_body">
                    <img src={first} className="project_image"></img>
                    <img src={first} className="project_image"></img>
                    <img src={first} className="project_image"></img>
                    <img src={first} className="project_image"></img>
                </div>
            </div>
        );
    }
}

export default Project;