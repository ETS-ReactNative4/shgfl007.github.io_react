import React, { Component } from 'react';
import {brioBKG, briop1, briop2,brioAnim,brioref,briodesign,brios1,briodesign2,briotweet,briodetail, brioFin} from '../../../Constants/Image'

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
  height:'280px',
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
            <h2>BRIOVR</h2>
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
                <h2>Challenges</h2>
                <ul>
                  <li>Show 3d space inside the 2d editor</li>
                  <li>Responsive to object's movements and size changes in realtime</li>
                  <li>Understandable by the personas</li>
                </ul>

              </div>

              <h2>Personas</h2>
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

              <h2>Team and Roles</h2>
              <p>For this project, I’m working as the UI/UX designer.
                I was working with a developer to build this feature for BRIOVR.</p>



            <h2>Discovery</h2>
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



            <h2>Design, Mockup and Iterations</h2>

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
              <li>What - The indicator should appear for: primitives, 3D models, images, videos, waypoints (camera & movement), player camera</li>
            </ul>


            <h2>The Prototype</h2>
            <p>I've made some quick mockups in Adobe XD, but the indicator is supposed to be used in 3D space. 2D mockups won\'t be good enough to
            represent how the indicator will look and function in a 3D space. So I built a quick prototype inside Brio since it was the fastest way
            I can think of to make a prototype in 3D without coding.
            </p>
            <p>I included following aspects in the mockup:'</p>
            <ul>
              <li>A variaty of shapes of objects (using objects from Google Poly library)</li>
              <li>Different sizes of objects</li>
              <li>Objects that were rotated to different angels</li>
            </ul>

            <p>From the mockup, I added 2 more rules based on the tests and discoveries:</p>
            <ul>
              <li>The bottom part of the indicator has a minium and a maxium size, so it won't get lost when the model is either too small or too big</li>
              <li>The indicator is based from the center of the object's bounding box instead of pivit points</li>
            </ul>
            <p><a href='' target='_blank'>Here's the link to the prototype</a></p>
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

            <h2>Detailed Design</h2>
            <div className='project-image'><img src={briodetail} /></div>
            <p>The design doc contains the basic designs of the indicator. Since it was different than 2D design, there wasn't too many pixel relationed
            aspects. The mockup was passed to the developer along with this design doc so he could have a better understanding of the feature and see the
            animation easier.</p>

          <h2>Test It Out</h2>
            <p>It's different to prototype in 3D space and it's different to test within 3D space. After talking to the developer that was
              assigned to the task, we decided to use the prototype as a reference to start
              developing and test it out when the indicator is interactable. </p>
            <p>The tests were focusing the following questions that I wasn't sure when doing tests on 2D prototypes:</p>
            <ul>
              <li>Is the indicator visible with any background colour?</li>
              <li>Can the indicator represent where the 3d object is (x,y,z direction)?</li>
              <li>Can the user understand how the indicator work?</li>
              <li>Is there other things that I didn't consider when I was doing the design?</li>
            </ul>

            <h2>Developing & Testing</h2>
            <p>Just like the mockup, we used objects with different shape and sizes and tested with different people in-house. From the result,
            we changed following things:</p>
            <ul>
              <li>The maxium size of the bottom indicator</li>
              <li>The minium size of the bottom indicator</li>
              <li>The starting point of the indicator changed from the center of the bounding box to the center of the bottom face of the bounding box</li>
              <li>The indicator will always be on top of anything in the scene (other than the editor interface)</li>
            </ul>
            <p>In addition to the list, we changed the animtion to a simpler one due to development timeline.</p>

          <h2>In App Result & Future Developments</h2>
          <div className='brio-fin-video'><video className='brio-animation' src={brioFin} autoPlay loop muted/></div>
          <p>The final result of the indicator helped to locate objects within 3D space. From our analytics, I found that
          it surprisingly helped a lot on the waypoints other than 3D objects. For future developments, I would love to include: </p>
          <ul>
            <li>Add back the animation to make Brio more fun to use</li>
            <li>Adjust the base more based on the average model that users use</li>
            <li>Add inspector support when user drags model from the Brio library or Google Poly library and from their computer</li>
          </ul>



          <h2>Social Proof</h2>
              <div className='project-image'><div style={ tweet }></div></div>
              <p>From our user Marie Graham's tweets, we found that Brio was easy and intuitive for students to build quick prototypes
              to experience in VR, which was great to hear as we wanted Brio to be a tool for building MVPs. </p>



            <h2>Takeaways</h2>
          <p>I learned a lot from designing and developing this feature:</p>
          <ul>
            <li>Always talk to the team! They are all smart people, and I can always learn from them. Plus, fresh eyes are always helpful!</li>
            <li>Never be afraid to try new things! I was going to use After Effects for the animation and prototype, but ended up with using Brio,
               which saved me time and efforts and worked well for me and the developer.</li>
             <li>Sometimes, it's fine to change the workflow! We tested the feature as we developing it. This wasn't the regular workflow, but
             for this feature it actually shorten the development circle!</li>
          </ul>

          </div>
    </div>
    );
  }
}
