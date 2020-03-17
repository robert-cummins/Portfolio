import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Robert Cummins</h2>
                        <img src="https://scontent.fpmr1-1.fna.fbcdn.net/v/t1.0-9/30222395_10204530742346515_6254030108708520111_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=UBluZDpJBaQAX8PLuFi&_nc_ht=scontent.fpmr1-1.fna&oh=db710209752f65ed3150a458038618c4&oe=5E8FC336" alt="avatar" style={{ height: "250px" }} />
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        0221646572
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                        robert.k.cummins@Gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contacts