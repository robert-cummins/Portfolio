import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Robert Cummins</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{ height: "250px" }} />
                        <p style={{ width: "75%", margin: 'auto', paddingTop: "1em" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus est, consectetur ac euismod vel, dignissim in ligula. Fusce aliquet blandit arcu eu mollis. Proin tempor nulla a aliquam ullamcorper. Suspendisse non elementum mi. Nam in velit eu neque sollicitudin pretium ac et erat.</p>
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