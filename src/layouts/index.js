import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import banf from './banf.jpg'; // Tell Webpack this JS file uses this image

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'lavender',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
          Hassan Shaikley
      </h1>
			<br />
			Software Engineer based in Calgary who is interested in Elixir/Phoenix, Node, React and Ruby on Rails.

    </div>
  </div>
)

const MyLinks = () => (
	<div>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
		<h1>External Links</h1>

			<ul>
				<li>
					<a style={{color: 'black'}} href="http://github.com/hassanshaikley">GitHub</a>
				</li>
				<li>
					<a style={{color: 'black'}} href="https://www.linkedin.com/in/hassan-shaikley-88317653/">LinkedIn</a>
				</li>
				<li>
				<a style={{color: 'black'}} href="mailto:hassan.shaikley@gmail.com?Subject=Noticed%20Your%20Portfolio" target="_top">Email</a>
				</li>
			</ul>
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
				color: 'black',
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
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
		<MyLinks />

		<PreFooter />
{		//<Footer />
}  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
