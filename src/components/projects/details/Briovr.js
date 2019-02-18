import React, { Component } from 'react';
import {brioBKG, briop1, briop2,brioAnim,brioref} from '../../../Constants/Image'

const ref = {
  width: '100%',
  height:'265px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${brioref})`
};

export default class Briovr extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Making Editing 3D Scenes Easier</h1>
            <hr/>
            <h3>BRIOVR</h3>
            <p>Solve the problem of placing objects in 3D space using 2D editor</p>
            <div className='hero-img' style={{backgroundImage:`url(${brioBKG})`}}></div>
          </div>
          <div className='project-content animated'>
            <p>BRIOVR is an online platform for people with less 3d experiences
              and no coding experiences to create quick and short 3D interactive
              experience. We found that it’s hard to tell where the object is
              when editing in 3D space in a 2D window. This project was to help
              users visualize where they are moving/placing objects while
              editing in BRIOVR builder.</p>

              <div className='section-block'>
                <h3>Challenges</h3>
                <ul>
                  <li>Show 3d space inside the 2d editor</li>
                  <li>Responsive to object's movements and size changes in realtime</li>
                  <li>Understandable by the personas</li>
                </ul>

              </div>

              <h3>Personas</h3>
              <div className='persona-section'>

                <div className='persona-card'>
                  <img src={briop1} />
                  <h4>Tony</h4><h4>Interaction Designer, Tech Savy</h4>
                  <h4>34 Years Old</h4>
                  <p>Tony works in the technology industry as a designer. </p>
                </div>
                <div className='persona-card'>
                  <img src={briop2} />
                  <h4>Amy</h4><h4>Product Designer (Industrial)</h4>
                  <h4>28 Years Old</h4>
                  <p>Amy is a product designer that works for a toy company. She has some basic knowledge about 3d
                  software. She is curious about the new AR/VR trend and wants to showcase her toy designs especially in AR.</p>
                </div>
              </div>

              <h3>Team and Roles</h3>
              <p>For this project, I’m working as the UI/UX designer.
                I was working with a developer to build this feature for BRIOVR.</p>



            <h3>Discovery</h3>
            <div className='project-image'><div style={ ref }></div></div>

            <p>Before getting started into the design process, I did some research
              on how 3d software represents 3d space. Here's what I've discovered:</p>
            <ul>
              <li>For 3d modeling software, most of them use split views of top, front and side.</li>
              <li>For game engines like Unreal and Unity, they also use the split views to identify the space.</li>
              <li>For AR apps (AR stickers in particular), they use a grid to identify the surface and a circle/square to identify where they are placing the object.</li>
              <li>In real life, we know that when objects are closer, they are bigger. If something is floating, we know how far by looking at the shadow it casts.</li>
            </ul>
            <p>I found that 3d modeling software and game engines are for users that are trained to view the 3d space using different view ports.
              While AR apps provides a better solution for regular users that doesn't have much experiences with professional 3d software. </p>
            <p>Also as human, we do have a natural understanding of 3 dimensional world by observing the size of we see an object and its shadow.</p>

            <p>After conducting the research, I started to build prototypes based on my discoveries.</p>



            <h3>Prototyping and Tests</h3>
            <p>The first design was a combination between current AR solutions and real life experiences.</p>
            <p>The indicator will</p>
            <ul>
              <li>Be based on the grid system we are currently having to assist users</li>
              <li>Have 2 parts: part 1 shows the distance from the grid. Part 2 identifies the location and size on the x-z plane</li>
            </ul>

            <div className='split-section'>
              <div className='split-left'><video className='brio-animation' src={brioAnim} autoPlay loop/></div>
              <div className='split-right'></div>

            </div>

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
