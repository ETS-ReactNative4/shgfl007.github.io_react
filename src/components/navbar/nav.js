import React, { Component } from 'react';


export default class Nav extends Component {

  render() {
    return (
      <nav className='nav-home'>
          <ul className='list'>
                  <li className='item'>
                    <a className='link' href="">Home</a>
                  </li>
                  <li className='item'>
                    <a className='link' href="">Projects</a>
                  </li>
                  <li className='item'>
                    <a className='link' href="">About</a>
                  </li>
                  <li className='item'>
                    <a className='link' href="">Résumé</a>
                  </li>
          </ul>
      </nav>

    );
  }
}
