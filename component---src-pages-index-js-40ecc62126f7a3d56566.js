webpackJsonp([35783957827783],{106:function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,n=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,u,d){if("string"!=typeof u){if(c){var m=s(u);m&&m!==c&&e(t,m,d)}var p=n(u);o&&(p=p.concat(o(u)));for(var h=0;h<p.length;++h){var f=p[h];if(!(r[f]||a[f]||d&&d[f])){var g=l(u,f);try{i(t,f,g)}catch(e){}}}return t}return t}},65:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Left=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s=r(2),c=a(s),u=r(5);a(u),t.Left=function(e){function t(){return i(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=l({width:"40%",minWidth:"255px",margin:0},this.props.style||{});return c.default.createElement("div",{style:e,className:this.props.className},this.props.children)},t}(c.default.Component)},182:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Project=void 0;var l=r(2),s=a(l),c=r(5);a(c),t.Project=function(e){function t(){return i(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.project,r=e.paid;return s.default.createElement("div",{style:{color:"rgba(0,0,0,.8)"},className:r?"paidProject":"unpaidProject"},s.default.createElement("div",{className:"projectInfo"},t.role&&s.default.createElement("h4",null,t.role," // ",s.default.createElement("bold",null,t.company)),!t.role&&s.default.createElement("h4",null,s.default.createElement("bold",null,t.company)),s.default.createElement("div",{style:{fontSize:"90%",lineHeight:"normal",marginTop:"7px"}},t.description),s.default.createElement("div",{style:{}},t.technologies&&t.technologies.map(function(e,t){return s.default.createElement("small",{key:t},s.default.createElement("span",{style:{backgroundColor:"lavender",borderRadius:"3px",padding:"2px",marginRight:"10px",whiteSpace:"nowrap"}},e))}),t.technologies&&s.default.createElement("br",null),t.url&&s.default.createElement("a",{href:t.url},s.default.createElement("div",{className:"src-url"},"Source Url")),t.demoUrl&&s.default.createElement("a",{href:t.demoUrl},s.default.createElement("div",{className:"demo-url"},"Demo URL")),t.siteUrl&&s.default.createElement("a",{href:t.siteUrl},s.default.createElement("div",{className:"site-url"},"Site URL")))),t.imgSource&&s.default.createElement("div",{className:r?"paidProjectImg":"unpaidProjectImg"},s.default.createElement("img",{className:"projectImg",style:{padding:"0%",width:"100%",marginBottom:0},src:"/"+t.imgSource,alt:"Logo"})))},t}(s.default.Component)},66:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Right=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(2),o=a(n),l=r(5);a(l),t.Right=function(e){var t=e.children,r=e.className,a=e.style,n=i({},a||{});return o.default.createElement("div",{id:"right-div",style:n,className:r},t)}},409:function(e,t,r){e.exports=r.p+"static/banf.d78dcd1b.jpg"},186:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=r(2),n=a(i),o=r(87),l=(a(o),r(65)),s=r(66),c=r(409),u=a(c),d=r(182),m=r(376),p=r(378),h=r(377),f=(r(108),function(){return n.default.createElement("div",null,n.default.createElement("img",{style:{marginBottom:"0px",margin:"auto",display:"block",width:"100%"},src:u.default,alt:"A picture of me drinking coffee at Banff National Park."}))}),g=function(){return n.default.createElement("div",{style:{background:"#FEFEFF"}},n.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",flexWrap:"wrap",width:"100%"}},n.default.createElement(l.Left,{style:{margin:0}},n.default.createElement("h1",null,"About Me"),n.default.createElement("div",{id:"left-small"})),n.default.createElement(s.Right,null,n.default.createElement("p",null,"Hi! I'm Hassan Shaikley. I am currently a Software Engineer at Community where I write & review code written in Elixir.",n.default.createElement("br",null),n.default.createElement("br",null),"I received my Bachelors of Science in Computer Science from the University of California San Diego in 2016. In my third year I left to focus on a startup that went viral and earned a spot at a startup accelerator. Afterwards I went back to finish my degree.",n.default.createElement("br",null),n.default.createElement("br",null),"I am really interested in functional programming, React & creating beautiful and organized frontends, game servers, Elixir/Erlang/BEAM, and distributed computation as well as embedded programming with Nerves. I am also interested in Rust but have yet to start using it. Lately I have been too busy tinkering with the BEAM, three.js and nerves. I feel very fond towards the BEAM due to it being an ingenius implementation of the actor model.",n.default.createElement("br",null),n.default.createElement("br",null),"I spend my free time hanging out with my beautiful wife, walking my chihuahua, tinkering with hardware and software, playing the guitar, gardening, making games, playing Mercy on Overwatch and playing Animal Crossing.")),n.default.createElement(l.Left,null,n.default.createElement("h1",null,"Work Experience"),n.default.createElement("div",{id:"left-small"})),n.default.createElement(s.Right,null,n.default.createElement("ul",null,n.default.createElement("div",{id:"project-container"},h.map(function(e){return n.default.createElement("li",{key:e.company,style:{marginBottom:"25px"}},n.default.createElement(d.Project,{project:e,paid:!0}))})))),n.default.createElement("div",{style:{width:"100%"}},n.default.createElement(l.Left,null,n.default.createElement("h1",{style:{float:"left"}},"Portfolio")),n.default.createElement(s.Right,null,n.default.createElement("ul",null,n.default.createElement("div",{id:"project-container"},m.map(function(e){return n.default.createElement("li",{key:e.company,style:{marginBottom:"25px"}},n.default.createElement(d.Project,{project:e,paid:!1}))}))))),n.default.createElement("div",{style:{width:"100%"}},n.default.createElement(l.Left,null,n.default.createElement("h1",{style:{float:"left"}},"Talks")),n.default.createElement(s.Right,null,n.default.createElement("ul",null,n.default.createElement("div",{id:"project-container"},p.map(function(e){return n.default.createElement("li",{key:e.description,style:{marginBottom:"25px"}},n.default.createElement(d.Project,{project:e,paid:!1}))})))))),n.default.createElement(f,null))};t.default=g,e.exports=t.default},108:function(e,t){e.exports=[{title:"Early Thoughts about Elixir",body:"Some background: Most of my development experience is in Node & Ruby. And this is more of a post about the communities values more so than the languages themselves.<br /><br/> Ruby was probably the first programming language I really liked It was pleasant to use, productive and fun. But with rails every now and again I would run into a wall. The magic that some Rails library performed was extremely difficult to configure. I didn't find Ruby source code easy to navigate either -- granted I was a much greener dev back then. <br /> <br /> With Node I found it much easier to read the source. Granted there are so many different styles of JavaScript, and some older libraries can be really difficult to understand. But I loved that there was, generally speaking, very little magic. But I never found it all that productive. <br /> <br /> I had always been intrigued by Erlang and I knew I wanted to learn it but never knew where to start.<br /> <br /> Then came Elixir. A language that is very similiar but much more beginner friendly, and a web framework that curses magic! It was perfect. I was a little bit scared to commit to learning to a very functional programming language (although Erlangists will say it's the most OO language out there!) but I did it anyways -- for knowledge! <br /><br /> I decided to try writing a multiplayer game in Phoenix (<a href='https://meaty-spiffy-hermitcrab.gigalixirapp.com'>Stabby Flies</a>) & the experience was phenomenal. Things just work! And everything is so easy to test. The language is pleasant to use and the conventions for documentation are really... nice! It's an excellent choice for browser game backends and I am excited to see what the future brings. There's still a lot I don't understand & I am still getting used to chopping things up into their own little processes but I really like what I've got so far. Elixir is fun to use, the community is nice, and their values align closely with mine. <br /> <br /> I write this a day after Joe Armstrong, the creator of Erlang, passed away. RIP Joe. Elixir & its community have been heavily influenced by his personality; his humility, appreciation for simplicity, and his ingenuity.  "}]},376:function(e,t){e.exports=[{company:"Realm of the Bits",description:"3D Multiplayer browser game prototype (io game) built with Elixir/Phoenix",_term:"November 2018 - Present",demoUrl:"https://meaty-spiffy-hermitcrab.gigalixirapp.com",url:"https://github.com/hassanshaikley/stabby-flies",technologies:["Elixir","Phoenix","Node.js","three.js","React Three Fiber"],imgSource:"rotb.png"},{company:"Raspberry PI Drum Machine",description:"Turn your Raspberry PI into a touchscreen drum machine",url:"https://github.com/hassanshaikley/rpi-drum-machine-nerves",technologies:["Nerves","Elixir","Raspberry PI","Scenic","Touchscreen"],imgSource:"drum_machine_screenshot.png"},{company:"A-Frame Character Editor",description:"Character editor like the ones you see in RPG games built for the browser",technologies:["A-Frame","Three.js","Javascript","Webpack"],url:"https://github.com/hassanshaikley/A-Frame-Character-Editor",demoUrl:"https://hassanshaikley.github.io/A-Frame-Character-Editor/",imgSource:"af2.png"},{company:"Chaosbeat",description:"Play a song as your pixel band",demoUrl:"https://lilsheep.itch.io/chaosbeat",url:"https://github.com/hassanshaikley/chaosbeat",technologies:["Node.js","Pixi.js"],imgSource:"chaosbeat.png"},{company:"Stabby Flies",description:"Sidescroller Multiplayer browser game (io game) built with Elixir/Phoenix featured at the Magwest Gaming Convention",_term:"November 2018 - Present",_demoUrl:"https://meaty-spiffy-hermitcrab.gigalixirapp.com",url:"https://github.com/hassanshaikley/stabby-flies",technologies:["Elixir","Phoenix","Node.js","Pixi.js"],imgSource:"stabby_flies.png"},{company:"Arena of the Bits",description:"Multiplayer Browser Game",term:"2015 - 2016",url:"https://github.com/hassanshaikley/arena-of-the-bits",technologies:["Express","Socket.io","Pixi.js","Node.js"],imgSource:"aotb.jpg"},{company:"Bitmaps to BDF",description:"A tool I made to create bitmap fonts visually for a custom Raspberry PI Console called the Flaschen Taschen",url:"  https://github.com/hassanshaikley/bitmaps-to-bdf",technologies:["c++"],imgSource:"bdf.png"},{company:"Cool Ways to Recycle",description:"Unity Game intended to teach children about recycling",demoUrl:"http://cse125.ucsd.edu/recycool/",technologies:["Unity","c#"],imgSource:"cool.jpg"},{company:"Who's That Pokemon!",description:"Game built for a custom console built with a Raspberry PI, beer bottles and milk crates",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon",technologies:["Node.js","c++"],imgSource:"flaschen.png"},{company:"Scary Spoders",description:"I turned a nightmare I had as a child into a game",url:"https://github.com/hassanshaikley/scary-spoders",demoUrl:"https://github.com/hassanshaikley/scary-spoders/releases",technologies:["Unity","c#"],imgSource:"spoder.png"},{company:"Menu Me",description:"A mobile app prototype I made to keep track of the meals I have at home",url:"https://github.com/hassanshaikley/menu-me",technologies:["React-Native"],imgSource:"menu_me.jpg"}]},377:function(e,t){e.exports=[{company:"Community",role:"Software Engineer",description:"Write and review elixir code",term:"April 2021 - Present",siteUrl:"http://community.com/",technologies:["Elixir","Phoenix","RabbitMQ"],extendedDescription:"Write and review Elixir!",_imgSource:"st_Laurent.jpg"},{company:"Weedmaps",role:"Software Engineer III",description:"Write and review elixir code",term:"April 2019 - Present",siteUrl:"http://weedmaps.com/",technologies:["Elixir","Phoenix"],extendedDescription:"Focused on an internal startup and after Covid I was shifted to the Online Ordering team",_imgSource:"st_Laurent.jpg"},{company:"youRhere",role:"Director of Software Development",description:"Plan, architect, direct & deliver various projects",term:"February 2018 - April 2019",siteUrl:"http://yourhere.ca/",technologies:["React","Hapi","Node.js","Express","MongoDB","Redis","WebGL","Blender","Babylon.js"],extendedDescription:"I oversee all of the development work and contribute primarily to the main engine. The main engine is a React engine that outputs interactive directories for various types of properties (Malls, Universities, Office, etc). It plugs straight into our CMS which I also oversee the development of.",_imgSource:"st_Laurent.jpg"},{company:"Stellaralgo",role:"Full Stack Developer",description:"Created Data Visualizations for the LA Kings, Calgary Flames and others",term:"July 2017 - November 2017",siteUrl:"http://www.stellaralgo.com",technologies:["Node.js","Meteor","HighCharts","Microsoft SQL Server","MongoDB"],_imgSource:"stellaralgo.png",extendedDescription:"Mentored junior developers and produced all sorts of data visualizations for sports teams such as the LA Kings and organizations like MoMA."},{company:"MIT Media Lab",role:"Visiting Scientist",description:"Worked with the Viral Communications Group on a project called PubPub that is like Github for Science.",term:"2016 - 2017",siteUrl:"https://www.pubpub.org/",technologies:["Node.js","Express","MongoDB","PostgreSQL","React"],_imgSource:"pubpub.png",extendedDescription:"Worked with an incredible team of graduate students at the MIT Media Lab in the creation of a collaborative editing and reviewing platform for scientific research. Its' list of users includes Snowden and Bunny."},{company:"TeachTCI",role:"Full Stack Developer Intern",description:"Educational technology directed towards K-12",term:"July 2015 - September 2015",siteUrl:"https://www.teachtci.com/",technologies:["Ruby on Rails","JavaScript"],_imgSource:"tci.jpg",extendedDescription:"Contributed full stack and mentored a junior developer. I wrote a lot of Rails code and paired often with senior engineers."},{company:"Ishqr",role:"Technical Co-founder",description:"Dating startup focused on Muslim Americans",term:"2013 - 2015",siteUrl:"http://ishqr.com",technologies:["Ruby on Rails","PostgreSQL","Bootstrap"],_imgSource:"ishqr.png",extendedDescription:"Cofounded a dating startup that went viral and was incubated in a startup accelerator"},{company:"AutoFusion",role:"Full Stack Developer Intern",description:"Developed features for a photoshop like browser application",siteUrl:"https://www.autofusion.com",technologies:["PHP","JavaScript","MySQL"],_imgSource:"af.png",extendedDescription:"Worked on a photoshop like application optimized for creating car dealership advertisements. It was a lot of intensive frontend programming."}]},378:function(e,t){e.exports=[{company:"Building a Touch Screen Drum Machine with Nerves and Scenic",description:"Using Elixir and Nerves, and a touch screen and raspberry pi I demonstrate how to build a drum machine!",_term:"November 2018 - Present",demoUrl:"https://www.verypossible.com/resources/video/touch-screen-nerves-scenic",_url:"https://github.com/hassanshaikley/stabby-flies",technologies:["Elixir","Phoenix","Node.js","three.js","React Three Fiber"],_imgSource:"rotb.png"}]}});
//# sourceMappingURL=component---src-pages-index-js-40ecc62126f7a3d56566.js.map