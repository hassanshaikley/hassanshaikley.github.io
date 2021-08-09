import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
global.React = React;

import './index.css'

import {Left} from '../components/left';
import {Right} from '../components/right';

import {Icon} from 'react-fa'



// Width 100% when less than a certain amount
// Otherwise width is 300px
const Header = () => (
  <div style={{
      background: 'lavender',
      display: 'inline-block'
    }} id="header">
    <div style={{ }}>
      <div style={{  }}>
        <h1 style={{ margin: 0, padding: "30% 2rem 0", textAlign: 'center'}}>
        Hassan Shaikley
        </h1>
        <div style={{margin: 'auto'}}>
        <a id="left-small">
        Home
        </a>
        <a id="left-small">
        About
        </a>
        <a id="left-small">
        Projects
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

const about_me_body = () => <p>
  About me body
</p>
const section =  (title, body) => <div>
<h2>{title}</h2>
<p>
  {body()}
</p>
</div>

const AboutMe = () => <p>
Hello me
</p>


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
    <div style={{display: 'inline-block'}}>
      {section("About ME", about_me_body)}
    </div>
      {children()}

		{/* <MyLinks /> */}

 </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
