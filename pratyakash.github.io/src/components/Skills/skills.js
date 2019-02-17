import React, { Component } from 'react';
import htmlico from '../../resources/images/html.png';
import cssico from '../../resources/images/css.png';
import jsico from '../../resources/images/js.png';
import bsico from '../../resources/images/bs.png';

class Skills extends Component {
    state={
        icon:[htmlico,cssico,jsico,bsico]
    }

    showIcon = () => (
        this.state.icon.map((icon,index) =>(
            <img src={ this.state.icon[index] } className="icon_wrapper" />
        ))
    )
    render() {
        return (
            <div>
                <div className="skill_wrapper">
                    {this.showIcon()}
                </div>
            </div>
        );
    }
}

export default Skills;