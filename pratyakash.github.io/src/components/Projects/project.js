import React, { Component } from 'react';
import venue from '../../resources/images/one.png'

class Project extends Component {
    render() {
        return (
            <div>
                <div className="project_body">
                    <div className="project_title">
                        <h1>Projects</h1>
                    </div>
                    <div className="project_name">
                        BoilerPlate For Landing Page
                    </div>
                    <div className="project_picture">
                        <img src={venue} className="project_image" />
                        {/* <figure className="imghvr-blur">
                            <img src={venue} className="project_image" />
                            <figcaption>
                                Hover Content
                            </figcaption>
                        </figure> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;