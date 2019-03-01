import React, { Component } from 'react';
import {brioBKG, briop1, briop2,brioAnim,brioref,briodesign,brios1,briodesign2,briotweet,briodetail} from '../../../Constants/Image'

const ref = {
  width: '100%',
  height:'265px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${brioref})`
}

const design = {
  width: '100%',
  height:'400px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${briodesign})`
}

const tweet = {
  width: '100%',
  height:'400px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${briotweet})`
}

const detail = {
  width: '100%',
  height:'400px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${briodetail})`
}

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



            <h3>Design, Mockup and Iterations</h3>

              <div className='split-section'>
                <div className='split-left'><img src={brios1} /></div>
                <div className='split-right'><h4>The Sketch</h4>
                  <p>Based on the discoveries, I first did some sketches before going deeper into the design.</p>
                  <p>I used simple elements to test out my assumptions: a cube, the grid and the indicator. The sketches
                     includes something similar to real world shadows that would be affected by the shape of the objects,
                     also something more abstract (a ring that represents the rough size of the object).
                  </p>
                </div>
              </div>

            <h4>The Mockup</h4>
            <p>I took some of the sketches and put it in Adobe XD on top of screenshots of the Brio builder. The elements
              are still simple: a cube, the grid with a background colour and the indicator.
            </p>
            <p>In this phase, I was focusing on the colour and shape of the variety indicators. It showed that what colour
              would be more visible with different background colours.
            </p>
            <p>After building the mockup, I showed it to the team that were working on other features. Before getting into
               it, I explain what was expected for the indicator. Here's the list I've mentioned to the team:
            </p>
            <p>The indicator should</p>
            <ul>
              <li>Show where the object is on the x-z plane (how far from the edit camera)</li>
              <li>Be visible and self explainary</li>
              <li>Be very light in terms of rendering & calculation within the web app</li>
            </ul>
            <p>From the feedbacks from the team, I learned that using an abstract base that won't be affected by the shape of
               the object would be a better choice in terms of performance. This helped me filtered out the realtime shadow like
               indicators and focused more on the abstract ring shapes.
            </p>

            <div className='project-image'><img src={briodesign} /></div>

            <h4>The Base</h4>
            <p>I worked on a variaty of the abstract bases and for each round I asked artists and other team members for their feedback.</p>
            <p>After several iterations, the base became something similar to the final design: a ring shape with dotted outline.</p>

            <div className='split-section'>
              <div className='split-left'><img src={briodesign2}/></div>
              <div className='split-right'><h4>The Height Ruler</h4>
              <p>It was easier to design the height indicator after setting the base style and colour from the base. The height indicator
              was refering to rulers and and grid system we were using in Brio. The distance between each dot is the same distance between
              each 'x' on the grid. In this way, users wouldn't need to think about whether the distances were the same.</p>
              </div>
            </div>

            <h4>The Rules</h4>
            <p>Other than designing the actual appearance of the indicator, I also set the rules of the indicator. Here are the rules:</p>
            <ul>
              <li>When - The indicator appears when a object is being manipulated (move, scale, rotate)</li>
              <li>Where - The base should always be on the grid. The other side of the indicator should be in from the ceter of the object.</li>
            </ul>


            <h3>The Prototype</h3>
            <p>I've made some quick mockups in Adobe XD, but the indicator is supposed to be used in 3D space. 2D mockups won't be good enough to
            represent how the indicator will look and function in a 3D space. So I built a quick prototype inside Brio since it was the fastest way
            I can think of to make a prototype in 3D without coding.
            I quickly made some prototypes within Brio with animations.</p>
            <div className='split-section'>
              <div className='split-left'><video className='brio-animation' src={brioAnim} autoPlay loop muted/></div>
              <div className='split-right'>
                <h4>Give It A Bit Characteristics</h4>
                <p>To make the indicator more responsive and obvious, I added some animation to make it react more to user's
                  interactions. For the height indicator, it pops up a sphere when the object moves up (or down underneath the grid)
                  0.5 meters (Brio unit). And a sphere will disapear when it reaches the base on both ways. The motion brought the
                  indicator a bit more characteristics but not too much.
                </p>
              </div>

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
            <div className='project-image'><img src={briodetail} /></div>


            <h3>Social Prof</h3>
              <div className='project-image'><div style={ tweet }></div></div>



            <h3>Takeaways</h3>

          </div>
    </div>
    );
  }
}
