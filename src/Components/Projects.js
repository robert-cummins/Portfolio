import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './ProjectCard'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories = () => {
        let reactArr = [
            <ProjectCard link={"https://github.com/robert-cummins/splinter"} title={"Splinter"} text={"A bill splitting app that can be used for house shares, trips away etc."} />,
            <ProjectCard link={"https://github.com/robert-cummins/uber-chef-react"} title={"UberChef"} text={"An Uber like App to connect customers to private chefs"} />,
            <ProjectCard link={"https://github.com/robert-cummins/weather-or-not"} title={"Weather or Not"} text={"An app that decides what activities are appropriate for upcoming weather"} />,
            
        ]

        let cSharpArr = [
            <ProjectCard num={1} text={"This is my amazing C# Project. Check it out!"} />,
            <ProjectCard num={2} text={"This is my amazing C# Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing C# Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing C# Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing C# Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing C# Project. Check it out!"} />,
        ]

        if (this.state.activeTab === 0) {
            return (
                <Grid>
                    {reactArr.map((card, i )=> {
                        return <Cell key={i} col={4}>{card}</Cell>
                    })}
                </Grid>
            )
        } else {
            return (
                <Grid>
                    {cSharpArr.map((card, i)=> {
                        return <Cell key={i+100} col={4}>{card}</Cell>
                    })}
                </Grid>
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
                <Grid >
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects