import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Project from './Projects'
import BRIOVR from './details/Briovr'
import FairTrade from './details/fairtrade'
import bkaleg from './details/breakaleg'


export default class ProjectList extends Component {
  render(){
    return(
      <main>
    <Switch>
    <Route exact path='/projects' component={Project} />
    <Route path='/projects/briovr' component={BRIOVR} />
    <Route path='/projects/fairtrade' component={FairTrade} />
    <Route path='/projects/break-a-leg' component={bkaleg} />
    </Switch>
    </main>)
  }



}
