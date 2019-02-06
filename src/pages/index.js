import React from 'react'
import Link from 'gatsby-link'

import {Left} from '../components/left';
import {Right} from '../components/right';
import banf from './banf.jpg'; // Tell Webpack this JS file uses this image



const projects = require('./projects.json')
const resumeProjects = require('./resume.json')

const MeAtBanff =() => (
	<div>
		<img style={{marginBottom: '0px', margin: 'auto', display: 'block', width: '100%'}} src={banf} alt="A picture of me drinking coffee at Banff National Park." />
		</div>
)



import { Project } from '../components/project'
const IndexPage = () => (
  <div
    style={{
      background: '#FEFEFF',
    }}
  >

  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    }}
  >
      <Left style={{margin: 0}}>
  		<h1 >About Me</h1>
      <div id="left-small">
       {/* Software Developer */}
      </div>
    </Left>
    <Right>
      <p>
      Hi! I'm Hassan Shaikley. I am the Director of Software Development at youRhere Interactive Directories where I write a lot of React and review a lot of server code.
    <br />
    <br />
      I received my Bachelors of Science in Computer Science from the University of California San Diego. In my third year I left to focus on a startup that went viral and earned a spot at a startup accelerator. Afterwards I went back to finish my degree.
      <br />
      <br />
      I am really interested in functional programming, creating beautiful and functional frontends, game servers, Elixir + Erlang, and distributing computation. I am also interested in Rust and Nerves but I have yet to seriously venture in that direction.
      <br />
      <br />
      I spend my free time walking my chihuahua, toying with Elixir, playing guitar, gardening, making games, and playing Overwatch.
      </p>
    </Right>

    <Left>
  		<h1>Work Experience</h1>
      <div id="left-small">
      {/* Frontends, Backends, Data Visualizations, APIs, Prototypes */}
      </div>
    </Left>
    <Right>
		<ul>
      <div id="project-container" >
    {
      resumeProjects.map(project => {
        return (
          <li key={project.description} style={{marginBottom: '25px'}}>
            <Project project={project} paid={true}/>
          </li>
      )
      })
    }
    </div>
		</ul>
    </Right>

    <div style={{width: '100%'}}>
    <Left>
  		<h1>Portfolio</h1>
      <div id="left-small">
      {/* Frontends, Backends, Data Visualizations, APIs, Prototypes, Games */}
      </div>
    </Left>
    <Right>
		<ul>
      <div id="project-container" >
    {
      projects.map(project => {
        return (
          <li key={project.description} style={{marginBottom: '25px'}}>
            <Project project={project} paid={false}/>
          </li>
      )
      })
    }
    </div>
		</ul>
    </Right>
    </div>


    </div>
    <MeAtBanff />

  </div>
)

export default IndexPage
