(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Indicator.39765ff3.png"},function(e,t,a){e.exports=a.p+"static/media/brioP1.aeb87dcb.svg"},function(e,t,a){e.exports=a.p+"static/media/brioP2.afa1806c.svg"},function(e,t,a){e.exports=a.p+"static/media/fairtrade.ddd660d8.png"},function(e,t,a){e.exports=a.p+"static/media/rulebkg.73de79ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/bkg.f657fe0c.jpg"},function(e,t,a){e.exports=a.p+"static/media/MockupFlow.9f423af2.png"},function(e,t,a){e.exports=a.p+"static/media/profile_new.05c3c0a3.png"},,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),i=a.n(r),o=(a(34),a(3)),c=a(4),s=a(5),m=a(6),u=a(7),h=(a(36),a(37),a(39),a(45)),d=a(17),p=a.n(d),g=a(18),E=a.n(g),b=a(19),f=a.n(b),v=a(20),y=a.n(v),j=a(21),w=a.n(j),k=a(22),O=a.n(k),T=a(23),N=a.n(T),D=a(24),C=a.n(D),P=[{title:"Placement Indicator",category:"Case Study, UX Design",app:"BRIOVR",caption:"Solve the problem of placing objects in 3D space using 2D editor",img:p.a,link:"/briovr"},{title:"From Soul Food to Fair Trade",category:"Case Study, UX Design",app:"FairTrade",caption:"Bridging the disconnection between newcomers and kind hearted locals",img:y.a,link:"/fairtrade"},{title:"Paper Prototype for Quick Play Test",category:"Case Study, UX Design, Game Design, Paper Prototyping",app:"Break A Leg",caption:"A party game that brings fun to all the players",img:w.a,link:"/break-a-leg"},{title:"Foguang Temple Touring Guide",category:"Case Study, UX Design, Development",app:"Foguang Temple",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"},{title:"Geogram",category:"UX Design",app:"Geogram",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"},{title:"Know Who Is The Real User",category:"Case Study, UX Design, Development",app:"Jump In",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"}],I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getProjects",value:function(e){return e.map(function(e){return l.a.createElement("div",{className:"project-card spacing1",key:e.title,style:{backgroundImage:"url(".concat(e.img,")")}},l.a.createElement(h.a,{to:"/projects"+e.link},l.a.createElement("div",{className:"title-bkg"},l.a.createElement("div",{className:"brief"},l.a.createElement("h3",null,e.app),l.a.createElement("hr",null),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category)))))})}},{key:"getCS",value:function(){return P.reduce(function(e,t){return t.category.includes("Case Study")&&e.push(t),e},[])}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated"},l.a.createElement("div",{className:"project-cards"},this.getProjects(this.getCS())))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated spacing1"},l.a.createElement("div",{className:"header-split"},l.a.createElement("div",{className:"header-split-left"},l.a.createElement("img",{className:"selfie",alt:"profile_pic",src:C.a}),l.a.createElement("h1",{className:"title"},"Danning Lu"),l.a.createElement("h2",{className:"description"},"Product Designer - Creative Coder - Storyteller")),l.a.createElement("div",{className:"header-split-right"},l.a.createElement("p",{className:"summary"},"Danning is a developer, digital media designer, and virtual reality specialist. Her experience as a digital media artist has resulted in her developing unique and immersive experiences. Danning has completed a variety of projects under the field of Digital Media, including designing and building robots, interactive performance, interactive installation, and game design. Throughout all her projects, she is seeking and exploring new ways of interactive storytelling with an immersive virtual environment. Danning holds a Master of Digital Media and a Bachelor of Arts."))),l.a.createElement("div",null,l.a.createElement("h2",null,"Case Studies"),l.a.createElement(I,null)))}}]),t}(n.Component),x=a(13),U=a(27),F=a.n(U),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={menuOpen:!1,solutionsOpen:!1,verticalPosition:"top"},e.onScroll=e.onScroll.bind(Object(x.a)(Object(x.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var e=window.scrollY<320?"top":"bottom";e!==this.state.verticalPosition&&this.setState({verticalPosition:e})}},{key:"getNavClass",value:function(){var e="bottom"===this.state.verticalPosition;return F()("nav-home",{"nav-small":e})}},{key:"render",value:function(){var e=this.getNavClass();return l.a.createElement("nav",{className:e},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"item"},l.a.createElement(h.a,{to:"/"},"Home")),l.a.createElement("li",{className:"item"},l.a.createElement(h.a,{to:"/projects"},"Projects")),l.a.createElement("li",{className:"item"},l.a.createElement(h.a,{to:"/about"},"About")),l.a.createElement("li",{className:"item"},l.a.createElement("a",{className:"link",href:""},"R\xe9sum\xe9"))))}}]),t}(n.Component),A=a(48),B=a(47),X=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getProjects",value:function(){return P.map(function(e){return l.a.createElement("div",{className:"project-card",key:e.title,style:{backgroundImage:"url(".concat(e.img,")")}},l.a.createElement(h.a,{to:"/projects"+e.link},l.a.createElement("div",{className:"title-bkg"},l.a.createElement("h3",null,e.app),l.a.createElement("hr",null),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category))))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated spacing1"},l.a.createElement("h1",{className:"title"},"Projects"),l.a.createElement("h2",{className:"description"},"Projects include UX design, game design, rapid prototyping and developing."),l.a.createElement("div",{className:"project-cards"},this.getProjects()))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Making Editing 3D Scenes Easier"),l.a.createElement("hr",null),l.a.createElement("h3",null,"BRIOVR"),l.a.createElement("p",null,"Solve the problem of placing objects in 3D space using 2D editor")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null,"BRIOVR is an online platform for people with less 3d experiences and no coding experiences to create quick and short 3D interactive experience. We found that it\u2019s hard to tell where the object is when editing in 3D space in a 2D window. This project was to help users visualize where they are moving/placing objects while editing in BRIOVR builder."),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to understand how our users use the 2D editor we provide via BRIOVR to create in a 3D space.")),l.a.createElement("h3",null,"Personas"),l.a.createElement("div",{className:"persona-section"},l.a.createElement("div",{className:"persona-card"},l.a.createElement("img",{src:E.a}),l.a.createElement("h4",null,"Tony"),l.a.createElement("h4",null,"Interaction Designer, Tech Savy"),l.a.createElement("h4",null,"34 Years Old"),l.a.createElement("p",null,"Tony works in the technology industry as a designer. ")),l.a.createElement("div",{className:"persona-card"},l.a.createElement("img",{src:f.a}),l.a.createElement("h4",null,"Amy"),l.a.createElement("h4",null,"Student"),l.a.createElement("h4",null,"20 Years Old"),l.a.createElement("p",null,"Amy is a college student that is learning new "))),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"For this project, I\u2019m working as the UI/UX designer. I was working with a developer to build this feature for BRIOVR."),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null,"Market research: I researched apps and software that allows users to edit 3d worlds using a 2d ui, including game engines and 3d modeling software. I found that many of the apps are facing the same issue. Artists are used to using different view ports to understand the 3d space they are working in, but for people with less 3d experience, there is a learning curve in it, which is not what we want for brio."),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null,"The prototype stage had 2 stages. Stage 1 is 2D prototyping. This stage contains the appearance and function of the indicator using Adobe XD.I took how people see 3d objects in real life as a reference and created a prototype imitate shadow. Stage 2 is 3D prototyping. This stage was done within brio using primitives and a plane to represent the bottom of the indicator. This stage also includes prototyping the animation."),l.a.createElement("p",null,"For the testing stage, I wanted to know if the indicator can:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Be visible with any background colour"),l.a.createElement("li",null,"Represent where the 3d object is (x,y,z direction)"),l.a.createElement("li",null,"Be easily understood by users with less 3d experiences")),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"From Soul Food to Fair Trade"),l.a.createElement("hr",null),l.a.createElement("h3",null,"FairTrade"),l.a.createElement("p",null,"Bridging the disconnection between newcomers and kind hearted locals")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null,"This project is focusing on bridging the disconnection between newcomers/refugees that are in need of help and kind hearted people who wants to help by donating clothing and other supplies. The project started as a platform to help newcomer\u2019s families to earn some extra money by selling their home made food. We found that many people are using social media to sell their home made food. But when we dig deeper into market research, we found that there has already been platforms that are doing the same thing. So pivoted from Soul Food to Fair Trade. "),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"In this project I worked as a UX designer collaboration with another UI/UX designer and later on I used Unity to build a working prototype in Angel Hack 2018 Toronto. After winning the hackathon, I continued working on Fair Trade to shape the branding and user experience. "),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to discover what we can create to bridge the gap between new comers and locals to help them adapt and ")),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Paper Prototype for Quick Play Test"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Break A Leg!"),l.a.createElement("p",null,"A party game that brings fun to all the players")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null," "),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"In this project I worked as a UX designer collaboration with another UI/UX designer and later on I used Unity to build a working prototype in Angel Hack 2018 Toronto. After winning the hackathon, I continued working on Fair Trade to shape the branding and user experience. "),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to discover what we can create to bridge the gap between new comers and locals to help them adapt and ")),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getPersonas",value:function(){return this.props.personas.map(function(e){return l.a.createElement("div",{key:e.name,className:"persona-card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"header-img"},l.a.createElement("img",{src:e.img})),l.a.createElement("div",{className:"header-text"},l.a.createElement("h4",null,e.name),l.a.createElement("h4",null,e.job),l.a.createElement("h4",null,e.age," Years Old"))),l.a.createElement("p",null,e.description))})}},{key:"render",value:function(){return this.getPersonas()}}]),t}(n.Component),V=[{name:"Tina",age:"20",img:f.a,description:"Tina is a college student that is majored in Architecture. She comes to the site to see the temple in real life. Tina knows the site but she has never seen its full."},{name:"Ru Zhi",age:"65",img:E.a,description:"Ru Zhi comes to the temple with his grandson. He wants to show his grandson the cultural heritage so he could learn about the history and appreciate the culture."}],W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Telling the Story Behind Acient Temple with Digital Media"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Foguang Temple Touring Guide"),l.a.createElement("p",null,"Getting to know not only the audience but also the environment.")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("h2",null,"The Project"),l.a.createElement("hr",null),l.a.createElement("p",null,"This project was commissioned by our client - Cultural Heritage Conservation Center (Beijing, China) to tell the historical and cultural story behind the FoGuang Temple."),l.a.createElement("p",null,"We worked closely with our client to give the tourists onsite and visitors from online an indeepth experience via the web app we created."),l.a.createElement("ul",null,l.a.createElement("li",null,"Client: Cultural Heritage Conservation Center, Beijing GWY CO., LTD"),l.a.createElement("li",null,"Project Time: 2015 - 2016"),l.a.createElement("li",null,"Role: Product Designer / Developer, Client Contact Person")),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"I worked on the UI/UX design and development with another designer. In addition to the app development, I also worked as the contact point between us and the client."),l.a.createElement("h2",null,"Discovery"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Problems & Challenges"),l.a.createElement("p",null,"Our client collect data in their process of conserve the Foguang Temple. They wanted to use the data to tell the story of Foguang Temple. Here are their problems:"),l.a.createElement("ul",null,l.a.createElement("li",null,"A huge amount of data is not being used"),l.a.createElement("li",null,"Pick which story to tell, since the temple itself has a history more than 1000 years"),l.a.createElement("li",null,"The product needs to be accessible for both onsite and offsite visitors")),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Goal"),l.a.createElement("ul",null,l.a.createElement("li",null,"Find only one storyline to tell"),l.a.createElement("li",null,"To present the data within the story instead of a data library"),l.a.createElement("li",null,"The product should be accessible online and offline"))),l.a.createElement("h3",null,"Personas"),l.a.createElement("div",{className:"persona-section"},l.a.createElement(L,{personas:V})),l.a.createElement("h2",null,"Prototyping and Tests"),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://projects.invisionapp.com/share/8H4UNDU3U#/screens/113970779",target:"_blank"},l.a.createElement("h3",null,"User Flow")),l.a.createElement("img",{src:N.a}),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Result"),l.a.createElement("p",null,"The app can be found on the Google Chrome Store:"),l.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1",target:"_blank"},"FoGuang App"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(A.a,null,l.a.createElement(B.a,{exact:!0,path:"/projects",component:X}),l.a.createElement(B.a,{path:"/projects/briovr",component:G}),l.a.createElement(B.a,{path:"/projects/fairtrade",component:H}),l.a.createElement(B.a,{path:"/projects/break-a-leg",component:M}),l.a.createElement(B.a,{path:"/projects/foguang-temple",component:W})))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated"},l.a.createElement("h1",{className:"title"},"About"),l.a.createElement("h2",{className:"description"},"UX Designer - Creative Coder - Illustrator - Storyteller"))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"main"},l.a.createElement(A.a,null,l.a.createElement(B.a,{exact:!0,path:"/",component:S}),l.a.createElement(B.a,{path:"/projects",component:Y}),l.a.createElement(B.a,{path:"/about",component:_}))))}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(R,null),l.a.createElement(J,null))}}]),t}(n.Component),z=a(46);i.a.render(l.a.createElement(z.a,null,l.a.createElement(q,null)),document.getElementById("root"))}],[[29,2,1]]]);
//# sourceMappingURL=main.57558749.chunk.js.map