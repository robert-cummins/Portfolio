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
            <ProjectCard num={1} text={"This is my amazing React Project. Check it out!"} />,
            <ProjectCard num={2} text={"This is my amazing React Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing React Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing React Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing React Project. Check it out!"} />,
            <ProjectCard num={3} text={"This is my amazing React Project. Check it out!"} />,
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
                    {reactArr.map(card => {
                        return <Cell col={4}>{card}</Cell>
                    })}
                </Grid>
            )
        } else {
            return (
                <Grid>
                    {cSharpArr.map(card => {
                        return <Cell col={4}>{card}</Cell>
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