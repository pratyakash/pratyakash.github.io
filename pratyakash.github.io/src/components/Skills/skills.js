import React, { Component } from 'react';
import htmlico from '../../resources/images/html.png';
import cssico from '../../resources/images/css.png';
import jsico from '../../resources/images/js.png';
import bsico from '../../resources/images/bs.png';

class Skills extends Component {
    state={
        icon:[htmlico,cssico,jsico,bsico]
    }
    render() {
        return (
            <div>
                <img src={htmlico} />
                <img src={cssico} />
                <img src={jsico} />
                <img src={bsico} />
            </div>
        );
    }
}

export default Skills;