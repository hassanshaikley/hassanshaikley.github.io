import React from 'react'
import Link from 'gatsby-link'

import { Left } from '../components/left';
import { Right } from '../components/right';
import banf from './banf.jpg'; // Tell Webpack this JS file uses this image



const projects = require('./projects.json')
const resumeProjects = require('./resume.json')
const blogPosts = require('./posts.json')


const MeAtBanff = () => (
  <div>
    <img style={{ marginBottom: '0px', margin: 'auto', display: 'block', width: '100%' }} src={banf} alt="A picture of me drinking coffee at Banff National Park." />
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
      <Left style={{ margin: 0 }}>
        <h1 >About Me</h1>
        <div id="left-small">
          {/* Software Developer */}
        </div>
      </Left>
      <Right>
        <p>
          Hi! I'm Hassan Shaikley. I am currently a Software Engineer III at Weedmaps where I write & review code written in Elixir.
    <br />
          <br />
          I received my Bachelors of Science in Computer Science from the University of California San Diego in 2016. In my third year I left to focus on a startup that went viral and earned a spot at a startup accelerator. Afterwards I went back to finish my degree.
      <br />
          <br />
          I am really interested in functional programming, React & creating beautiful and organized frontends, game servers, Elixir/Erlang/BEAM, and distributed computation as well as embedded programming with Nerves. I am also interested in Rust but have yet to start using it. Lately I have been too busy tinkering with the BEAM, three.js and nerves. I feel very fond towards the BEAM due to it being an ingenius implementation of the actor model.
      <br />
          <br />
          I spend my free time walking my chihuahua, tinkering with hardware and software, playing the guitar, gardening, making games, playing Mercy on Overwatch and playing Animal Crossing.
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
                  <li key={project.description} style={{ marginBottom: '25px' }}>
                    <Project project={project} paid={true} />
                  </li>
                )
              })
            }
          </div>
        </ul>
      </Right>

      <div style={{ width: '100%' }}>
        <Left>
          <h1 style={{ float: 'left' }}>Portfolio</h1>
        </Left>
        <Right>
          <ul>
            <div id="project-container" >
              {
                projects.map(project => {
                  return (
                    <li key={project.description} style={{ marginBottom: '25px' }}>
                      <Project project={project} paid={false} />
                    </li>
                  )
                })
              }
            </div>
          </ul>
        </Right>
      </div>



      {/* <Left style={{}}>
        <h1>Blog</h1>
        <div id="left-small">
        </div>
      </Left>
      <Right style={{}}>
        {blogPosts.map(blogPost => (
          <div>
            <Link to={`/blog#${blogPost.title.replace(/ /g, '-')}`}>
              <h4>
                {blogPost.title}
              </h4>
            </Link>
          </div>
        ))}
      </Right> */}
    </div>



    <MeAtBanff />

  </div>
)

export default IndexPage
