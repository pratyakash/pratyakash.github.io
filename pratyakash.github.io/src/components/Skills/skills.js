import React, { Component } from 'react';
import htmlico from '../../resources/images/html.png';
import cssico from '../../resources/images/css.png';
import jsico from '../../resources/images/js.png';
import bsico from '../../resources/images/bs.png';

class Skills extends Component {
    state={
        icon:[htmlico,cssico,jsico,bsico],
        showExp: false
    }

    showIcon = () => (
        this.state.icon.map((icon,index) =>(
            <img src={ this.state.icon[index] } className="skill_wrapper_icon_wrapper" />
        ))
    )
    render() {
        return (
            <div className="skill_wrapper">
                <div className="skill_wrapper_title">
                    <h1>Skills</h1>
                </div>
                <div className="skill_wrapper_icons">
                    {/* {this.showIcon()} */}
                    <div className="skill_wrapper_icon_wrapper">
                        <img src={ htmlico } className="skill_wrapper_icon_wrapper_icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;