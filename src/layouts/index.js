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
        <small>
        Software Engineer
        </small>
      </Left>
      <Right>
      Full Stack Developer interested in Elixir/Phoenix, Node, React and Ruby on Rails.
      </Right>
    </div>
  </div>
)

const MyLinks = () => (
  <div
    style={{
      background: '#9696D4',
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
  		<h1>External Links</h1>
      <small>
      Elsewhere
      </small>
    </Left>
    <Right>
      <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', padding: '0px 20px 0px 20px'}} href="http://github.com/hassanshaikley">
      <Icon name="github" />
      </a>
      <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', padding: '0px 20px 0px 20px'}} href="https://www.linkedin.com/in/hassan-shaikley-88317653/">
      <Icon name="linkedin" />
      </a>
      <a style={{color: 'rgba(0,0,0,.8)', fontSize: '50px', padding: '0px 20px 0px 20px'}} href="mailto:hassan.shaikley@gmail.com?Subject=Noticed%20Your%20Portfolio" target="_top">
      <Icon name="envelope" />
      </a>
    </Right>
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
        { name: 'description', content: 'Hassan is a Software Engineer located in Calgary, AB. He has experience writing and architecting software for startups and larger companies.' },
        { name: 'keywords', content: 'Calgary, Alberta, Node, Meteor, Node.js, API, REST, Microservices, Software Engineer, Top Tech Talent, Programmer, Web Developer, Microservices, JavaScript, Front End, Full Stack, Back end, elixir, phoenix, Hassan Shaikley, React, MIT, MIT Media Lab' },
      ]}
    />
    <Header />
      {children()}
		<MyLinks />

		<PreFooter />
{		//<Footer />
}  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
