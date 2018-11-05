import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ProjectList} from '../../Constants/Projects'
export default class Projects extends Component {
  getProjects(){
    return ProjectList.map((project)=>
    <div className='project-card spacing1' key={project.title} style={{backgroundImage:`url(${project.img})`}}>
      <Link to={'/projects'+project.link}>
        <div className='title-bkg'>
          <div className='brief'>
            <h3>{project.app}</h3>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        </div>
      </Link>
    </div>
  )
  }

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <div className='header-home animated'>
          <div className='project-cards'>
            {this.getProjects()}
          </div>

      </div>
    );
  }
}
