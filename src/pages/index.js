import React from 'react'
import Link from 'gatsby-link'

import {Left} from '../components/left';
import {Right} from '../components/right';

const projects = require('./projects.json')
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
    <Left>
  		<h1>Projects and Work</h1>
      <div id="left-small">
      Websites, Games, Data Visualizations, APIs, Prototypes
      </div>
    </Left>
    <Right>
		<ul>
    {
      projects.map(project => {
        return (
          <li key={project.description} style={{marginBottom: '25px'}}>
            <Project project={project} />
          </li>
      )
      })
    }
		</ul>
    </Right>
    </div>

  </div>
)

export default IndexPage
