import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', height: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://scontent.fpmr1-1.fna.fbcdn.net/v/t1.0-9/30222395_10204530742346515_6254030108708520111_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=UBluZDpJBaQAX8PLuFi&_nc_ht=scontent.fpmr1-1.fna&oh=db710209752f65ed3150a458038618c4&oe=5E8FC336" alt="avatar" className="avatar-image"></img>
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