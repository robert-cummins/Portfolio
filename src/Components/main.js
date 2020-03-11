import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contacts from './Contacts'
import Projects from './Projects'


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main