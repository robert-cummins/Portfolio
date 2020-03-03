import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', height: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="avatar-image"></img>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React/Redux | Node | RESTful APIs | SQL databases | Git</p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"></i></a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"  aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage