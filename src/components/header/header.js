import React, { Component } from 'react';
import Projects from '../projects/ProjectsHome'
import {profile} from '../../Constants/Image'

export default class Header extends Component {

  render() {
    return (
      <div className='header-home animated spacing1'>

          <div className='header-split'>
            <div className='header-split-left'>

              <img className='selfie' alt="profile_pic" src={profile} />

              <h1 className="title">Danning Lu</h1>
              <h2 className="description">Product Designer - Creative Coder - Storyteller</h2>
            </div>
            <div className='header-split-right'>
              <p className='summary'>Danning is a developer, digital media designer, and virtual reality specialist. Her experience as a digital media artist has resulted in her developing unique and immersive experiences. Danning has completed a variety of projects under the field of Digital Media, including designing and building robots, interactive performance, interactive installation, and game design. Throughout all her projects, she is seeking and exploring new ways of interactive storytelling with an immersive virtual environment. Danning holds a Master of Digital Media and a Bachelor of Arts.</p>
            </div>
          </div>

          <div>
            <h2>Case Studies</h2>
            <Projects />
          </div>
      </div>
    );
  }
}
