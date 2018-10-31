import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ProjectList = [
  {title: 'Placement Indicator - BRIOVR', category:'Case Study, UX Design', caption:'Solve the problem of placing objects in 3D space using 2D editor', img:'../assets/projects/briovr/Indicator.png', link:'/briovr'},
  {title: 'From Soul Food to Fair Trade', category:'Case Study, UX Design', caption:'bridging the disconnection between newcomers and kind hearted locals', img:'../assets/projects/fairtrade/fairtrade.png', link:'/fairtrade'},
  {title: 'Break a Leg!', category:'Case Study, UX Design, Game Design, Rapid Prototyping', caption:'A party game that brings fun to all the players', img:'', link:'/break-a-leg'},
  {title: 'Foguang Temple Touring Guide', category:'Case Study, UX Design, Development', caption:'Telling the story behind the temple with a thunsand year history and the visitors', img:'', link:'/foguang-temple'},
]
export default class Projects extends Component {
  getProjects(){
    return ProjectList.map((project)=>
    <div className='project-card' key={project.title} style={{backgroundImage:`url(${project.img})`}}>
      <Link to={'/projects'+project.link}>
        <div className='title-bkg'>
          <h3>{project.title}</h3>
          <p>{project.caption}</p>
        </div>
      </Link>
    </div>
  )
  }

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <div className='header-home animated'>

          <h1 className='title'>Projects</h1>
          <h2 className='description'>Projects include UX design, game design, rapid prototyping and developing.</h2>
          <div className='project-cards'>
            {this.getProjects()}
          </div>

      </div>
    );
  }
}
