import React, { Component } from 'react';
import first from '../../resources/images/first.png'

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project_body">
                    <div className="project_list">
                        <div className="project_item">
                            <img src={first} className="project_image"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;