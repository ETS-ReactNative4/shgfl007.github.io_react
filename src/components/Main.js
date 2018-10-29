import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Project from './projects/Projects'
import Home from './header/header'
import About from './about/About'

export default class Main extends Component {
  render(){
    return(
      <main>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/projects' component={Project} />
    <Route path='/about' component={About} />
    </Switch>
    </main>)
  }



}
