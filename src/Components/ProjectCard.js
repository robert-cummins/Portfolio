import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'
import React from 'react';


const ProjectCard = (props) => {
    return (
        <Card shadow={5} style={{ minWidth: '450', margin: "auto" }}>
            <CardTitle style={{ color: '#fff', height: "176px", background: "url(https://reactjs.org/logo-og.png) center/cover" }}>{props.title}</CardTitle>
            <CardText>
                {props.text}
            </CardText>
            <CardActions className={"project-links"}>
                <Button className={"github-button"} colored><a href={props.link}>GitHub</a></Button>
                {props.webLink &&
                    <Button className={"deployed-button"} colored><a href={props.webLink}>Deployed</a></Button>
                }

            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share"></IconButton>
            </CardMenu>
        </Card>
    )
}

export default ProjectCard