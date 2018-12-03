import React, { Component } from 'react';
import {foguangBKG, fgflow, fgIA, briop1, briop2, fgmain,fgphoto,fgp1} from '../../../Constants/Image'
import Persona from './components/persona'

const personas = [
  {name:'Tina', age:'20', img: briop2, description:'Tina is a college student that is majored in Architecture. She comes to the site to see the temple in real life. Tina knows the site but she has never seen its full.'},
  {name:'Ru Zhi', age: '65', img: briop1, description:'Ru Zhi comes to the temple with his grandson. He wants to show his grandson the cultural heritage so he could learn about the history and appreciate the culture.'}
]

export default class Foguang extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
          <div className='hero-img' style={{backgroundImage:`url(${fgmain})`}}></div>
            <h1 className='title'>Telling the Story Behind Acient Temple with Digital Media</h1>
            <hr/>
            <h3>Foguang Temple Touring Guide</h3>
            <p>Getting to know not only the audience but also the environment.</p>
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

            <h3>Team and Roles</h3>
            <p>I worked on the UI/UX design and development with another designer.
              In addition to the app development, I also worked as the contact point between us
              and the client.
            </p>



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
                <li>Pick which story to tell, since the temple itself has a history more than 1000 years</li>
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


              <h3>Personas</h3>
              <div className='persona-section'>
                <Persona personas={personas} />
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




            <h2>Product</h2>
            <hr/>
          <h3>Detailed Design</h3>
          <img src={fgp1} />

            <h3>Result</h3>
            <p>The app can be found on the Google Chrome Store:</p>
            <p><a href='https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1'
              target='_blank'>FoGuang App</a></p>


            <h2>Takeaways</h2>
            <hr/>


          </div>
    </div>
    );
  }
}
