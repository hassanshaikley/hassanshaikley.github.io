import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Hassan Shaikley
        </Link>

      </h1>
			<br />
			Software Engineer based in Calgary who is interested in Elixir/Phoenix, Node, React and Ruby on Rails.

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
		<ul>
			<li><a style={{color: 'black'}} href="http://github.com/hassanshaikley">GitHub</a>
</li>
			<li><a style={{color: 'black'}} href="https://www.linkedin.com/in/hassan-shaikley-88317653/">LinkedIn</a>
</li>
		</ul>

    </div>
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
		<Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
