import React, { Component } from 'react';
import {ftBKG,briop2,briop1, ftq, ftflow} from '../../../Constants/Image'
import Persona from './components/persona'
import Takeaways from './components/Takeaways'

const personas = [
  {name:'Ali', age:'45', img: briop1,
    description:'Ali is a newcomer to Canada and landed with his family. He knows English and is trying to get a job ASAP. He brought some souvenirs with him to remind his family of home. He needs help to settle down his family but he doesn\'t want to beg for it.',
    needs: ['Need help to settle down his family', 'Does\'t have enough money to just buy everything new', 'Does\'t want to go to shelters and beg for help'],
    statues:['Newcomer landed with his family that includes small children', 'Doesn\'t have a job yet but is actively looking for one', 'Try to save money as much as possible'],
    sol:['Go to Kijiji and look for used items', 'Go to garage sells when and wherever there\'s one']
  },
  {name:'May', age: '40', img: briop2,
    description:'May is a stay-at-home mom. She has 2 children and they are all big enough to go to high school. When cleaning the house, she finds that there are many things that she won\'t use anymore. She finds it\'s timing and energy consuming to post on Kijiji, and somethings she just throw them away.',
    needs: ['Hard to find a place to donate different kinds of objects that she won\'t use', 'Would like to help other people but doesn\'t know how'],
    statues:['Stay-at-home mom', 'Takes care of the house hold', 'Has extra stuff that she could and willing to give away'],
    sol:['Sometimes but barely using Kijiji to sell second hand objects', 'Throw the things/cloth away', 'Sometimes host garage sell in the summer']
  }
]
export default class FairTrade extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>From Soul Food to Fair Trade</h1>
            <hr/>
            <h3>FairTrade</h3>
            <div className='hero-img' style={{backgroundImage:`url(${ftBKG})`}}></div>
          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>The Project</h2>
              <hr/>
            <p className='first-section-par'>This project is focusing on bridging the disconnection between
            newcomers/refugees that are in need of help and kind hearted people
            who wants to help by donating clothing and other supplies.
            The project started as a platform to help newcomer’s families to
            earn some extra money by selling their home made food.
            We found that many people are using social media to sell
            their home made food. But when we dig deeper into market research,
            we found that there has already been platforms that are doing
            the same thing. So pivoted from Soul Food to Fair Trade. </p>
          </div>

          <div className='project-section'>

              <h2>Team and Roles</h2>
              <hr/>
              <p className='fist-section-par list-title'>In this project I worked as a UX designer collaboration
              with another UI/UX designer and later on I used Unity to build
              a working prototype in Angel Hack 2018 Toronto. After winning
              the hackathon, I continued working on Fair Trade to shape the
              branding and user experience. My overall work for this project can be summarized as:</p>
              <ul>
                <li>Create the UX flow of Soul Food (later Fair Trade)</li>
                <li>Research on competitors, personas and current solutions</li>
                <li>Create an interactive prototype (in Angel Hack 2018)</li>
                <li>Co-create the wireframe and prototype</li>
                <li>Create the style guide for Fair Trade</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Discovery</h2>
              <hr/>
              <h3 className='section-title'>The Problem & Challenge</h3>
              <p className='first-section-par'>The problem we found is that the locals are willing to give away their
              used objects but they don't know where to donate them and they don't know even if they find where to donate,
              is the one that gets their donation really need the object they donated or it's just another piece that will go
              to garbage or recycle bin. And for people who are in need of some object, they finds that it's hard to say they
              need it. They would like to give something in return instead of just take them. There‘s a gap between the two and
              we decided to take the challenge and bridge the gap.
            </p>


            <div className='split-section'>
              <div className='split-left'><img src={ftq}/></div>
              <div className='split-right'>

            <h3 className='section-title'>The Survey</h3>

              <p className='first-section-par'>To understand our personas better, we created 2 sets of surveys: 1 is for the kind hearted locals, and the other is for
                the shoppers (who will receive the donations).
              </p>
            </div>
          </div>

              <h3 className='section-title'>Personas</h3>
                <div className='persona-section'>
                  <Persona personas={personas} />
                </div>

              <h3 className='section-title'>Goal</h3>
              <p className='first-section-par'>Based on the discover stage, we decided to build an app that bridge the gap between those people
                who would like to help the others but don't know where and how and the ones who need help but don't want to ask for it. Here’s the
                list of goals we were trying to achieve by building this app:
              </p>
              <div className='section-block'>

                <ul>
                  <li>The app needs to be accessible for both sides</li>
                  <li>It needs to save time for both sides</li>
                  <li>Both side should feel comfortable giving and taking</li>
                </ul>
              </div>
            </div>

            <div className='project-section'>
              <h2>Wireframe, Prototype and Tests</h2>
              <hr/>
              <h3 className='section-title'>The Flow</h3>
              <div className='project-image'><img src={ftflow}/></div>
              <p className='first-section-par'>The flow contains 2 parts: part 1 is for donors to post their objects and part 2 is for
              shoppers to trade for the object they would like to get. </p>
            <p>We decided to separate the two when they first land on either the web app or the phone app so that they won't be fed up with
              information that they don't care about. </p>
            <p>After choosing what they are, the users can browse either the wish list items (for donor to see if they have the item available) or the
              items that are available (for the shoppers to see if what they want is already waiting for trade).</p>
            </div>






            <h3>Prototyping and tests</h3>
            <p></p>
            <p>
            </p>


            <h3>Detailed Design</h3>


            <h3>Takeaways</h3>

          </div>
    </div>
    );
  }
}
