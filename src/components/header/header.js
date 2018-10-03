import React, { Component } from 'react';


export default class Header extends Component {

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <header className='header-home animated'>
          <span className='link'>
              <img className='selfie' alt="profile_pic" src={profile} />
          </span>

          <h1 class="title">Danning Lu</h1>
          <h2 class="description">UX Designer - Creative Coder - Illustrator - Storyteller</h2>

      </header>
    );
  }
}
