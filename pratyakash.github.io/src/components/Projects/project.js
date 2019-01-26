import React, { Component } from 'react';
import venue from '../../resources/images/venue2.jpg'

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project_body">
                   <div >
                       <img src={venue} className="project_image" />
                       <p className="white">adawdwda</p>
                   </div>
                </div>
            </div>
        );
    }
}

export default Project;