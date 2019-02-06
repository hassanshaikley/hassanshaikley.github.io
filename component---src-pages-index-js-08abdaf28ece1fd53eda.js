webpackJsonp([35783957827783],{84:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=b.hasOwnProperty(t)?b[t]:null;_.hasOwnProperty(t)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&E.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var l=n[i],u=o.hasOwnProperty(i);if(r(u,i),E.hasOwnProperty(i))E[i](e,l);else{var p=b.hasOwnProperty(i),m="function"==typeof l,h=m&&!p&&!u&&n.autobind!==!1;if(h)a.push(i,l),o[i]=l;else if(u){var y=b[i];s(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=d(o[i],l):"DEFINE_MANY"===y&&(o[i]=f(o[i],l))}else o[i]=l}}}else;}function u(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in E;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;s(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(s(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}function y(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=o,this.refs=l,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new j,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(a.bind(null,t)),a(t,v),a(t,e),a(t,w),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in b)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},E={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},w={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},j=function(){};return i(j.prototype,e.prototype,_),y}var a,i=n(5),l=n(30),s=n(1),c="mixins";a={},e.exports=r},168:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,u,p){if("string"!=typeof u){if(c){var d=s(u);d&&d!==c&&e(t,d,p)}var f=a(u);i&&(f=f.concat(i(u)));for(var m=0;m<f.length;++m){var h=f[m];if(!(n[h]||o[h]||p&&p[h])){var y=l(u,h);try{r(t,h,y)}catch(e){}}}return t}return t}},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,l,s=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var u in o)a.call(o,u)&&(s[u]=o[u]);if(r){l=r(o);for(var p=0;p<l.length;p++)i.call(o,l[p])&&(s[l[p]]=o[l[p]])}}return s}},64:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Left=void 0;var l=n(2),s=o(l),c=n(6);o(c),t.Left=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("div",{style:{width:"40%",minWidth:"255px",margin:0},className:this.props.className},this.props.children)},t}(s.default.Component)},182:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Project=void 0;var l=n(2),s=o(l),c=n(6);o(c),t.Project=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.project,n=e.paid;return s.default.createElement("div",{style:{color:"rgba(0,0,0,.8)"},className:n?"paidProject":"unpaidProject"},s.default.createElement("div",{className:"projectInfo"},t.role&&s.default.createElement("h4",null,t.role," // ",s.default.createElement("bold",null,t.company)),!t.role&&s.default.createElement("h4",null,s.default.createElement("bold",null,t.company)),s.default.createElement("div",{style:{fontSize:"90%",lineHeight:"normal",marginTop:"7px"}},t.description),s.default.createElement("div",{style:{}},t.technologies&&t.technologies.map(function(e){return s.default.createElement("small",null,s.default.createElement("span",{style:{backgroundColor:"lavender",borderRadius:"3px",padding:"2px",marginRight:"10px"}},e))}),t.technologies&&s.default.createElement("br",null),t.url&&s.default.createElement("a",{href:t.url},t.url))),t.imgSource&&s.default.createElement("div",{className:n?"paidProjectImg":"unpaidProjectImg"},s.default.createElement("img",{className:"projectImg",style:{padding:"0%",width:"100%",marginBottom:0},src:"/"+t.imgSource,alt:"Logo"})))},t}(s.default.Component)},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Right=void 0;var r=n(2),a=o(r),i=n(6);o(i),t.Right=function(e){var t=e.children,n=e.className;return a.default.createElement("div",{id:"right-div",style:{},className:n},t)}},403:function(e,t,n){e.exports=n.p+"static/banf.d78dcd1b.jpg"},185:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),a=o(r),i=n(137),l=(o(i),n(64)),s=n(65),c=n(403),u=o(c),p=n(182),d=n(371),f=n(372),m=function(){return a.default.createElement("div",null,a.default.createElement("img",{style:{marginBottom:"0px",margin:"auto",display:"block",width:"100%"},src:u.default,alt:"A picture of me drinking coffee at Banff National Park."}))},h=function(){return a.default.createElement("div",{style:{background:"#FEFEFF"}},a.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",flexWrap:"wrap",width:"100%"}},a.default.createElement(l.Left,{style:{margin:0}},a.default.createElement("h1",null,"About Me"),a.default.createElement("div",{id:"left-small"})),a.default.createElement(s.Right,null,a.default.createElement("p",null,"Hi! I'm Hassan Shaikley. I am the Director of Software Development at youRhere Interactive Directories where I write a lot of React and review a lot of server code.",a.default.createElement("br",null),a.default.createElement("br",null),"I received my Bachelors of Science in Computer Science from the University of California San Diego. In my third year I left to focus on a startup that went viral and earned a spot at a startup accelerator. Afterwards I went back to finish my degree.",a.default.createElement("br",null),a.default.createElement("br",null),"I am really interested in functional programming, creating beautiful and functional frontends, game servers, Elixir + Erlang, and distributing computation. I am also interested in Rust and Nerves but I have yet to seriously venture in that direction.",a.default.createElement("br",null),a.default.createElement("br",null),"I spend my free time walking my chihuahua, toying with Elixir, playing guitar, gardening, making games, and playing Overwatch.")),a.default.createElement(l.Left,null,a.default.createElement("h1",null,"Work Experience"),a.default.createElement("div",{id:"left-small"})),a.default.createElement(s.Right,null,a.default.createElement("ul",null,a.default.createElement("div",{id:"project-container"},f.map(function(e){return a.default.createElement("li",{key:e.description,style:{marginBottom:"25px"}},a.default.createElement(p.Project,{project:e,paid:!0}))})))),a.default.createElement("div",{style:{width:"100%"}},a.default.createElement(l.Left,null,a.default.createElement("h1",{style:{float:"left"}},"Portfolio"),a.default.createElement("div",{id:"left-small"})),a.default.createElement(s.Right,null,a.default.createElement("ul",null,a.default.createElement("div",{id:"project-container"},d.map(function(e){return a.default.createElement("li",{key:e.description,style:{marginBottom:"25px"}},a.default.createElement(p.Project,{project:e,paid:!1}))})))))),a.default.createElement(m,null))};t.default=h,e.exports=t.default},371:function(e,t){e.exports=[{company:"Stabby Flies",description:"Multiplayer browser game built in Elixir/Phoenix",term:"November 2018 - Present",url:"https://meaty-spiffy-hermitcrab.gigalixirapp.com",technologies:["Elixir","Phoenix","Node.js","Pixi.js"],imgSource:"stabby_flies.png"},{company:"Arena of the Bits",description:"Multiplayer Browser Game",term:"2015 - 2016",url:"http://aotb.io/",technologies:["Express","Socket.io","Pixi.js","Node.js"],imgSource:"aotb.jpg"},{company:"Bitmaps to BDF",description:"A tool I made to create bitmap fonts visually",url:"  https://github.com/hassanshaikley/bitmaps-to-bdf",technologies:["c++"],imgSource:"bdf.png"},{company:"Cool Ways to Recycle",description:"Game intended to teach children about recycling",url:"http://cse125.ucsd.edu/recycool/about",technologies:["Unity","c#"],imgSource:"cool.jpg"},{company:"Who's That Pokemon!",description:"Game built for a custom console built with a Raspberry PI, beer bottles and milk crates",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon",technologies:["Node.js","c++"],imgSource:"flaschen.png"},{company:"Scary Spoders",description:"I turned a nightmare I had as a child into a game",url:"https://github.com/hassanshaikley/scary-spoders",technologies:["Unity","c#"],imgSource:"spoder.png"},{company:"Menu Me",description:"A mobile app prototype I made to keep track of the meals I have at home",url:"https://github.com/hassanshaikley/menu-me",technologies:["React-Native"],imgSource:"menu_me.jpg"}]},372:function(e,t){e.exports=[{company:"youRhere",role:"Director of Development",description:"Plan, architect, direct & deliver various projects",term:"February 2018 - Present",url:"http://yourhere.ca/",technologies:["React","Hapi","Node.js","Express","MongoDB","Redis","WebGL","Blender","Babylon.js"],extendedDescription:"I oversee all of the development work and contribute primarily to the main engine. The main engine is a React engine that outputs interactive directories for various types of properties (Malls, Universities, Office, etc). It plugs straight into our CMS which I also oversee the development of.",_imgSource:"st_Laurent.jpg"},{company:"Stellaralgo",role:"JavaScript Developer",description:"Created Data Visualizations for the LA Kings, Calgary Flames and others",term:"July 2017 - November 2017",url:"http://www.stellaralgo.com",technologies:["Node.js","Meteor","HighCharts","Microsoft SQL Server","MongoDB"],_imgSource:"stellaralgo.png",extendedDescription:"Mentored junior developers and produced all sorts of data visualizations for sports teams such as the LA Kings and organizations like MoMA."},{company:"PubPub",role:"JavaScript Developer",description:"Contributed to PubPub; a Platform for collaborative science",term:"2016 - 2017",url:"https://www.pubpub.org/",technologies:["Node.js","Express","MongoDB","PostgreSQL","React"],_imgSource:"pubpub.png",extendedDescription:"Worked with an incredible team of graduate students at the MIT Media Lab in the creation of a collaborative editing and reviewing platform for scientific research. Its' list of users includes Snowden and Bunny."},{company:"Ishqr",role:"Technical Co-founder",description:"Dating startup focused on Muslim Americans",term:"2013 - 2015",url:"http://ishqr.com",technologies:["Ruby on Rails","PostgreSQL","Bootstrap"],_imgSource:"ishqr.png",extendedDescription:"Cofounded a dating startup that went viral and was incubated in a startup accelerator"},{company:"TeachTCI",role:"Software Developer",description:"Educational technology directed towards K-12",term:"July 2015 - September 2015",url:"https://www.teachtci.com/",technologies:["Ruby on Rails","JavaScript"],_imgSource:"tci.jpg",extendedDescription:"Contributed full stack and mentored a junior developer. I wrote a lot of Rails code and paired often with senior engineers."},{company:"AutoFusion",role:"Intern",description:"Developed features for a photoshop like browser application",url:"https://www.autofusion.com",technologies:["PHP","JavaScript","MySQL"],_imgSource:"af.png",extendedDescription:"Worked on a photoshop like application optimized for creating car dealership advertisements. It was a lot of intensive frontend programming."}]}});
//# sourceMappingURL=component---src-pages-index-js-08abdaf28ece1fd53eda.js.map