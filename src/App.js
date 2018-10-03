import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './main.scss';

import Header from './components/header/header'
import Nav from './components/navbar/nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
