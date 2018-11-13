import React, { Component } from 'react';
import {brioBKG, briop1} from '../../../Constants/Image'


export default class Briovr extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Making Editing 3D Scenes Easier</h1>
            <hr/>
            <h3>BRIOVR</h3>
            <p>Solve the problem of placing objects in 3D space using 2D editor</p>
          </div>
          <div className='project-content animated'>
            <p>BRIOVR is an online platform for people with less 3d experiences
              and no coding experiences to create quick and short 3D interactive
              experience. We found that it’s hard to tell where the object is
              when editing in 3D space in a 2D window. This project was to help
              users visualize where they are moving/placing objects while
              editing in BRIOVR builder.</p>

              <h3>Team and Roles</h3>
              <p>For this project, I’m working as the UI/UX designer.
                I was working with a developer to build this feature for BRIOVR.</p>

              <div className='section-block'>
                <h3>Challenge</h3>
                <p>The challenge for this project was to understand how our users
                use the 2D editor we provide via BRIOVR to create in a 3D space.</p>
              </div>



            <h3>Discovery</h3>
            <p>Market research: I researched apps and software that allows users
              to edit 3d worlds using a 2d ui, including game engines and 3d
              modeling software. I found that many of the apps are facing the
              same issue. Artists are used to using different view ports to
              understand the 3d space they are working in, but for people with
              less 3d experience, there is a learning curve in it,
              which is not what we want for brio.</p>
            <div className='persona-section'>
              <h4>Personas</h4>
              <img src={briop1} />
              <h5>Tony, Designer, Tech Savy</h5>
              <h5><span>Age</span>25 to 34 years</h5>
              <p>Tony works in the technology industry as a designer. </p>
            </div>

            <h3>Prototyping and tests</h3>
            <p>The prototype stage had 2 stages. Stage 1 is 2D prototyping.
              This stage contains the appearance and function of the indicator
              using Adobe XD.I took how people see 3d objects in real life as
              a reference and created a prototype imitate shadow. Stage 2 is 3D
              prototyping. This stage was done within brio using primitives and
              a plane to represent the bottom of the indicator. This stage also
              includes prototyping the animation.</p>
            <p>For the testing stage, I wanted to know if the indicator can:
            </p>
            <ul>
              <li>Be visible with any background colour</li>
              <li>Represent where the 3d object is (x,y,z direction)</li>
              <li>Be easily understood by users with less 3d experiences</li>
            </ul>

            <h3>Detailed Design</h3>


            <h3>Takeaways</h3>

          </div>
    </div>
    );
  }
}
