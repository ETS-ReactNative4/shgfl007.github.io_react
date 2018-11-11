import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Project from './Projects'
import BRIOVR from './details/Briovr'


export default class ProjectList extends Component {
  render(){
    return(
      <main>
    <Switch>
    <Route exact path='/projects' component={Project} />
    <Route path='/projects/briovr' component={BRIOVR} />
    </Switch>
    </main>)
  }



}
