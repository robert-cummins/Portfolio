import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'
import React from 'react';

const ProjectCard = (props) => {
    return (
        <Card shadow={5} style={{ minWidth: '450', margin: "auto" }}>
            <CardTitle style={{ color: '#fff', height: "176px", background: "url(https://reactjs.org/logo-og.png) center/cover" }}>React Project #{props.num}</CardTitle>
            <CardText>
                {props.text}
            </CardText>
            <CardActions>
                <Button colored>GitHub</Button>
                <Button colored>Deployed</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
            </CardMenu>
        </Card>
    )
}

export default ProjectCard