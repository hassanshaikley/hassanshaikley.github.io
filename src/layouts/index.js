import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import banf from './banf.jpg'; // Tell Webpack this JS file uses this image
global.React = React;

import './index.css'

import {Left} from '../components/left';
import {Right} from '../components/right';

import {Icon} from 'react-fa'



const Header = () => (
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
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Left>
        <h1 style={{ margin: 0 }}>
        Hassan Shaikley
        </h1>
        <div id="left-small">
        Software Developer
        </div>
      </Left>
      <Right>
      {/* <br /><small>Experience with React, Phoenix, Meteor, Ruby on Rails and various SQL & NoSQL Databases</small> */}
      </Right>
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
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px'}} href="http://github.com/hassanshaikley">
        <Icon name="github" />
        </a>
      </div>
      <div style={{width: '33%', float: 'right', textAlign: 'center'}}>
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px'}} href="https://www.linkedin.com/in/hassan-shaikley-88317653/">
        <Icon name="linkedin" />
        </a>
      </div>
      <div style={{width: '33%', float: 'right', textAlign: 'center'}}>
        <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px'}} href="mailto:hassan.shaikley@gmail.com?Subject=Noticed%20Your%20Portfolio" target="_top">
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

const PreFooter =() => (
	<div>
		<img style={{marginBottom: '0px', margin: 'auto', display: 'block', width: '100%'}} src={banf} alt="A picture of me drinking coffee at Banff National Park." />
		</div>
)

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
      {children()}
      <PreFooter />

		<MyLinks />

{		//<Footer />
}  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
