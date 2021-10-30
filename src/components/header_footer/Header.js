import React, { Component } from 'react';

class Header extends Component {
    state={
        header:false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    
    handleScroll = () =>{
        if (window.scrollY >500 ) {
            this.setState({
                header:true
            })
            
        } else {
            this.setState({
                header:false
            })
        }
    }


    render() {
        return (
            <div style={{
                display:this.state.header ? 'block':'none'
            }}>
                
                <div className="nav">
                    
                    <div className="nav-l">
                        <div className="title_wrap">
                            <div className="title font_righteous">
                            Pratyakash Saini
                            </div>
                        </div>
                    </div>

                    <div className="nav-r">
                        <div className="link_section">
                            <div className="item">Education</div>
                            <div className="item">Skills</div>
                            <div className="item">Projects</div>
                        </div>    
                    </div>
                
                </div>
            </div>
        );
    }
}

export default Header;