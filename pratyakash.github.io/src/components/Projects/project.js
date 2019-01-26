import React, { Component } from 'react';
import venue from '../../resources/images/My Post.jpg'

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project_body">
                   <div >
                       <img src={venue} className="project_image" />
                   </div>
                </div>
            </div>
        );
    }
}

export default Project;