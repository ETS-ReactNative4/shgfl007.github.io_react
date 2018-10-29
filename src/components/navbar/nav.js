import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

  render() {
    return (
      <nav className='nav-home'>
          <ul className='list'>
                  <li className='item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='item'>
                    <Link to='/projects'>Projects</Link>
                  </li>
                  <li className='item'>
                    <Link to='/about'>About</Link>
                  </li>
                  <li className='item'>
                    <a className='link' href="">Résumé</a>
                  </li>
          </ul>
      </nav>

    );
  }
}
