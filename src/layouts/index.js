import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
global.React = React;

import './index.css'

import {Left} from '../components/left';
import {Right} from '../components/right';

import {Icon} from 'react-fa'

import { ProjectsNew } from '../components/projects_new';



// Width 100% when less than a certain amount
// Otherwise width is 300px
const Header = () => (
  <div style={{
      background: 'lavender',
      display: 'inline-block'
    }} id="header">
    <div style={{ }}>
      <div style={{  }}>
        <h1 id="header-h1" style={{ margin: 0, textAlign: 'center'}}>
        Hassan Shaikley
        </h1>
        <div style={{margin: 'auto', width: 'max-content', marginTop: '1em'}}>
        <a id="left-small" href="#about_me">
        About Me
        </a>
        <a id="left-small" href="#blog">
        Blog
        </a>
        <a id="left-small" href="#projects">
        Projects
        </a>
        <a id="left-small" href="#talks">
        Talks
        </a>
        </div>
      </div>
    </div>
  </div>
)

const MyLinks = () => (
  <div
    style={{
      background: 'lavender',
    }}
  >
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      width: '100%',
      height: '100px'
    }}
  >

    <div style={{margin: 'auto'}}>
      <div style={{width: '33%', float: 'right', textAlign: 'center'}}>
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', border: "none"}} href="http://github.com/hassanshaikley">
        <Icon name="github" />
        </a>
      </div>
      <div style={{width: '33%', float: 'right', textAlign: 'center'}}>
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', border: "none"}} href="https://www.linkedin.com/in/hassan-shaikley-88317653/">
        <Icon name="linkedin" />
        </a>
      </div>
      <div style={{width: '33%', float: 'right', textAlign: 'center'}}>
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', border: "none"}} href="mailto:hassan.shaikley@gmail.com?Subject=Noticed%20Your%20Portfolio" target="_top">
        <Icon name="envelope" />
        </a>
      </div>
    </div>
	</div>
  </div>

)


const Footer = () => (
  <div
    style={{
      background: 'lavender',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
				color: 'rgba(0,0,0,.8)',
      }}
    >

    </div>
  </div>
)

// const about_me_body = () =>         <p>
// Hi! I'm Hassan Shaikley. I am currently a Software Engineer at
// Community where I write & review code written in Elixir.
// <br />
// <br />
// I received my Bachelors of Science in Computer Science from the
// University of California San Diego in 2016. In my third year I left to
// focus on a startup that went viral and earned a spot at a startup
// accelerator. Afterwards I went back to finish my degree.
// <br />
// <br />
// I am really interested in functional programming, React & creating
// beautiful and organized frontends, game servers, Elixir/Erlang/BEAM,
// and distributed computation as well as embedded programming with
// Nerves. I am also interested in Rust but have yet to start using it.
// Lately I have been too busy tinkering with the BEAM, three.js and
// nerves. I feel very fond towards the BEAM due to it being an ingenius
// implementation of the actor model.
// <br />
// <br />I spend my free time hanging out with my beautiful wife, walking
// my chihuahua, tinkering with hardware and software, playing the
// guitar, gardening, making games, playing Mercy on Overwatch and
// playing Animal Crossing.
// </p>


const about_me_body = () => <p>
My name is Hassan. I live in Atlanta, Georgia. In the past I've lived in Calgary, Somerville, Mountain View and Los Angeles.
<br />
<br />
I spend my time in my garden, playing video games, hanging out with my gorgeous wife and with my pets.
<br />
<br />
In college I co-founded a startup that went viral. I've worked directly with many CEOs, worked at the MIT Media Lab, in one of my roles I was a director at a software company with clients across North America.
<br />
<br />
I love to build prototypes and test the limits of new technology. Feel free to ask me about any of this; I enjoy talking about all of my experiences.
<br />
<br />
I am a huge user of Elixir and React. There's a whole laundry list of technologies I'm interested in which include
Zig, Godot Engine, three.js, Gatsby, React Three Fiber and many others.
On top of that my experience is fairly broad; I've taken ideas into production using many different technologies.
<br />
<br />
I love to build! I turned a nightmare I had as a child into a game which can be downloaded <a href="https://github.com/hassanshaikley/scary-spoders/releases">here</a>.
<br />
<br />
I've contributed to many open source projects including <a href="https://github.com/elixir-lang/elixir/">Elixir</a>, <a href="https://github.com/pubpub/pubpub">PubPub</a>, <a href="https://github.com/hassanshaikley/svg-pan-zoom">SVG Pan Zoom</a> and some others.
</p>

const projects_body = () =>         <ProjectsNew />

const talks_body = () =>         <p>I'm going to be doing my first tech talk very soon at NervesConf on Building a Drum Machine with a Raspberry Pi and Nerves.</p>

const blog_body = () => <p>
  <a href="https://hassanshaikley.medium.com/">Link to my blog.</a>
</p>


const section =  (title, body) => <div>
<h2 id={title.toLowerCase().split(' ').join('_')}>{title}</h2>
<p>
  {body()}
</p>
</div>



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hassan Shaikley's Portfolio"
      meta={[
        { name: 'description', content: 'Hassan is a Software Developer located in Calgary, AB. He has experience writing and architecting software for startups and larger companies.' },
        { name: 'keywords', content: 'Calgary, Alberta, Node, Meteor, Node.js, Elixir, Phoenix, GraphQL, API, REST, Microservices, Software Developer, Software Engineer, Top Tech Talent, Programmer, Web Developer, Microservices, JavaScript, Front End, Full Stack, Back end, elixir, phoenix, Hassan Shaikley, React, MIT, MIT Media Lab' },
      ]}
    />
    <Header />
    <div id="body-wrapper">


    <div style={{display: 'inline-block'}}>
      {section("About Me", about_me_body)}
      {section("Blog", blog_body)}
      {section("Projects", projects_body)}
      {section("Talks", talks_body)}


    </div>
      {children()}

		{/* <MyLinks /> */}

    </div>
 </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
