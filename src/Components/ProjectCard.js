import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'
import React from 'react';


const ProjectCard = (props) => {
    return (
        <Card shadow={5} style={{ minWidth: '450', margin: "auto" }}>
            <CardTitle style={{ color: '#fff', height: "176px", background: "url(https://reactjs.org/logo-og.png) center/cover" }}>{props.title}</CardTitle>
            <CardText>
                {props.text}
            </CardText>
            <CardActions>
                <Button colored><a href={props.link}>GitHub</a></Button>
                <Button colored>Deployed</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
            </CardMenu>
        </Card>
    )
}

export default ProjectCard