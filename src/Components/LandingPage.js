import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', height: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://scontent.fpmr1-1.fna.fbcdn.net/v/t1.0-9/264750_1397075144866_3533610_n.jpg?_nc_cat=110&_nc_sid=210fed&_nc_ohc=7agr1HA4rrYAX82sZGB&_nc_ht=scontent.fpmr1-1.fna&oh=8e5e287108f2fa3c846504e2ac316b23&oe=5E99A652" alt="avatar" className="avatar-image"></img>
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