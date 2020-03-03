import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: "auto"}}>
                    <CardTitle style={{color: '#fff', height: "176px", background: "url(https://reactjs.org/logo-og.png) center/cover"}}>React Project #1</CardTitle>
                    <CardText>
                        This is my amazing React App. Please have a look!
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>Deployed</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>
            )
        } else {
            return (
                <div><h1>This is C#</h1></div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div> 
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Projects