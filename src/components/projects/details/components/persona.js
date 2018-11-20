import React, { Component } from 'react';

export default class Persona extends Component {
  getPersonas() {
    return this.props.personas.map((persona)=>
    <div key={persona.name} className='persona-card'>
      <div className='card-header'>
        <div className='header-img'>
          <img src={persona.img} />
        </div>
        <div className='header-text'>
          <h4>{persona.name}</h4><h4>{persona.job}</h4>
          <h4>{persona.age} Years Old</h4>
        </div>
      </div>
      <p>{persona.description}</p>
    </div>
  )
  }

  render(){
    return (
      this.getPersonas()
    )

  }
}
