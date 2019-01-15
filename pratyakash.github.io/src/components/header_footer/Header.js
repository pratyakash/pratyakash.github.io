import React, { Component } from 'react';

class Header extends Component {
    state={
        headerLogo:false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    
    handleScroll = () =>{
        if (window.scrollY >500 ) {
            this.setState({
                headerLogo:true
            })
            
        } else {
            this.setState({
                headerLogo:false
            })
        }
    }


    render() {
        return (
            <div>
                
                <div className="nav">
                    
                    <div className="nav-l">
                        <div className="title_wrap">
                            <div className="title font_righteous" style={{
                                display:this.state.headerLogo ? 'block':'none'
                            }}>
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