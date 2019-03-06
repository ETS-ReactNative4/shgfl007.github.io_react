import React, { Component } from 'react';
import {foguangBKG, fgflow, fgIA, briop1, briop2, fgmain,fgphoto,fgp1, fgdp, fgvid, fgdd} from '../../../Constants/Image'
import Persona from './components/persona'

const personas = [
  {name:'Tina', age:'20', img: briop2,
    description:'Tina is a college student that is majored in Architecture. She comes to the site to see the temple in real life. Tina knows the site but she has never seen its full.',
    needs: ['Details of the statues', 'Details of the writings on the ceiling', 'Details on peoms on the door']
  },
  {name:'Ru Zhi', age: '65', img: briop1,
    description:'Ru Zhi comes to the temple with his grandson. He wants to show his grandchild the cultural heritage so he could learn about the history and appreciate the culture.',
    needs: ['Cultural background (temple & buddahism)', 'Why FoGuang is important', 'Something fun for kids']
  }
]

export default class Foguang extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >

            <h1 className='title'>Telling the Story Behind Acient Temple with Digital Media</h1>
            <hr/>
            <h2>Foguang Temple Touring Guide</h2>
            <p>Getting to know not only the audience but also the environment.</p>
            <div className='hero-img' style={{backgroundImage:`url(${fgmain})`}}></div>
          </div>
          <div className='project-content animated'>
            <h2>The Project</h2>
            <hr/>
            <p>This project was commissioned by our client - Cultural Heritage Conservation Center (Beijing, China)
              to tell the historical and cultural story behind the FoGuang Temple.
            </p>
            <p>We worked closely with our client to give the tourists onsite and visitors from online an indeepth
              experience via the web app we created.
            </p>
            <ul>
              <li>Client: Cultural Heritage Conservation Center, Beijing GWY CO., LTD</li>
              <li>Project Time: 2015 - 2016</li>
              <li>Role: Product Designer / Developer, Client Contact Person</li>
            </ul>

            <h2>Team and Roles</h2>
            <p>I worked on the UI/UX design and development with another designer.
              In addition to the app development, I also worked as the contact point between us
              and the client.
            </p>
            <h2>Design Process</h2>
            <img className='project-img project-img-small' src={fgdp} />



            <h2>Discovery</h2>
            <hr/>
              <h3>Problems & Challenges</h3>
              <p>
                Our client collect data in their process of conserve the Foguang Temple.
                They wanted to use the data to tell the story of Foguang Temple.
                Here are their problems:
              </p>
              <ul>
                <li>A huge amount of data is not being used</li>
                <li>Wanted to tell the story, but didn't know where to start</li>
                <li>The product needs to be accessible for both onsite and offsite visitors</li>
              </ul>

              <div className='section-block'>
              <h3>Goal</h3>
              <ul>
                <li>Find only one storyline to tell</li>
                <li>To present the data within the story instead of a data library</li>
                <li>The product should be accessible online and offline</li>
              </ul>
                </div>


              <h3>The Location & The Visitors</h3>
              <div className='split-section'>
                <div className='split-left'>
                  <img className='foguang-photo' src={fgphoto} />
                </div>
                <div className='split-right'>
                  <p className='first-par'>FoGuang Temple located in ShanXi Province. Arounding the temple, there is a small
                  village with some local restuarants opened for tourists. Inside the temple there wasn't
                  much trace of modern technology of Internet. Because of the location, even phone network
                  wasn't very strong.
                </p>
                <p>Most of the visitors to the site had knowledge of the temple: why it's important to the
                  Chinese architectural history. While some visitors came to the site with a book telling
                the story of Liang SiChen finding the site in their hands.</p>
              <p>Most of the visitors came around the noon. Inside most of its halls, there wasn't artifical
               lights. The site was lighten up by the sunlight. The site closed early since later visitors won't
               be able to see anything.
             </p>
                </div>
              </div>

              <h3>Personas</h3>
              <div className='persona-section'>
                <Persona personas={personas} />
              </div>

              <h3>Current Solutions</h3>
              <h4>For Client</h4>
              <ul><li>Indexed software for the database (not open to public)</li><li>Give presentations</li></ul>
              <h4>For Visitors</h4>
              <ul><li>Read books</li><li>Learn from their professors</li><li>Online research</li></ul>





            <h2>Prototyping and Tests</h2>
            <hr />
            <h3>Information Architecture</h3>
            <img className='project-img' src={fgIA}/>
            <p>We worked closely with our client to narraw down the storyline. </p>
              <ul>
                <li>One side of the story takes the temple as the main character and takes the audiences through its life.</li>
                <li>The other side of the story takes Liang SiCheng, the famous Chinese Architect as the main character.</li>
              </ul>
              <p>The two storyline comes together when the temple was rediscovered by Liang SiCheng.</p>
              <p>After the two story merging together, we decided to take advantage of the data from our client by showing the
                360 photos of current FoGuang Temple. </p>
              <p>In this section, we tell the story that are related to the Temple, so that the audience can see the content within
              its context.</p>

            <h3>The Mockup</h3>
            <p>After creating the the IA diagram, we did a quick mockup for our client to review.</p>
            <p>This mockup represented the flow we wanted to go with: start with the background story </p>

            <h3>VR or Not VR</h3>
            <p>Because we had a huge section that contains 360 photos, our client was considering it to be VR enabled.</p>
            <p>We take the exhibition display condition into considerations, here's list we presented to the client why
              we shouldn't do VR at the time:
            </p>
            <ul>
              <li>The exhibition is public, while VR is more of a personal experience</li>
              <li>Hygiene concerns</li>
              <li>Length and purpose of the experience: the experience was suppose to be educational, and audiences can
                take as long as they want to learn the story at their own pace.
              </li>
            </ul>
            <p>We did not make the app an VR experience onsite, but we did want to enable VR experience for online
             visitors since some of them would be looking at the site at their home and they would have their own VR
            goggles and would have enough time to go through everything.</p>


          <h3>Future Development</h3>
          <p>At the end of the project, we made another purposal for future development since at the time, the technology
          that suited the senerio best wasn't available.</p>
          <p>In the future development purposal we included the following points:</p>
          <ul>
          <li>Create an immersive onsite experience by adding image recognition</li>
          <li>Separating the onsite and offsite experiences by offering more tailored experiences</li>
          <li>Adding detailed scans from our client to showcase the statues inside the Great East Hall</li>
          </ul>




            <h2>Product</h2>
            <hr/>
          <h3>Detailed Design</h3>
          <div className='project-image'>
            <img src={fgdd} />
          </div>
          <p>For the detailed designs, we studied the styles of Tang dynasty to highlight the cultural aspect. The color was based on
            patterns found on cellings and wall paintings from the similar era. The elements for the timeline was based on buddhism stories and symbols.
             The icons for indoor interactions were based on types of the content: subject description or background story.</p>
           <p>In this way, we connect the app visually with the background concept to give the audiences a more immersived experiences.</p>

            <h3>Result</h3>
            <div className='project-image'>
              <video className='brio-animation' src={fgvid} autoPlay loop muted/>

            </div>
            <p>The app can be found on the Google Chrome Store:</p>
            <p><a href='https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1'
              target='_blank'>FoGuang App</a></p>


            <h2>Takeaways</h2>
            <hr/>
            <div>
              <h3>Know the Audience & Location</h3>
              <p>This project involves physical setups. Learn the location well to tailor the solution that is suitable for the location is important.</p>

              <h3>Choose the Tech to Serve the Story & Experience</h3>
              <p>Technology is just tools. We should never design something for the technology because it's cool. We pickup the right technology for the solution we proposed.</p>

              <h3>Learn from the Client & Work with Them</h3>
              <p>Our client knows best in their fields. We brought our client into our design process. We showed our client our process on bi-weekly meetings and took their advice.</p>

            </div>


          </div>
    </div>
    );
  }
}
