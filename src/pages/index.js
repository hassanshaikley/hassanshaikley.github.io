import React from 'react'
import Link from 'gatsby-link'

import banf from './banf.jpg'; // Tell Webpack this JS file uses this image


const IndexPage = () => (
  <div>
    <h1>About me</h1>
    <p>
		I am a Software Engineer based in Calgary that is interested in Elixir/Phoenix, Node, React and Ruby on Rails.
		<br />
		</p>

		<h1>Projects and Work</h1>
		Developed Data Visualizations and other core features for <a href="http://stellaralgo.com">Stellaralgo Corp.</a> in Calgary.
		<br />
		Contributed majorly to a <a href="https://github.com/pubpub">platform for collaborative science</a> at the MIT Media Lab.
		<br />

		Created a <a href="http://aotb.io">multiplayer browser game</a> written in Node.js.
		<br />
		I made a <a href="https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon">Who's That Pokemon!</a> game for a <a href="https://github.com/hzeller/flaschen-taschen">TV Made out of beer bottles, milk crates, and a rasberry PI</a>.
		<br />
		I made physics simulations for a <a href="https://www.teachtci.com/">company</a> based out of Mountain View.
		<br />
		I co-founded <a href="https://www.ishqr.com">a tech startup</a> that you can read about on <a href="https://www.npr.org/sections/codeswitch/2013/11/30/247572566/single-muslim-hipster-seeking-same-you-may-be-in-luck">NPR</a>.
		<br />
		I turned a nightmare I had as a child into a <a href="https://github.com/hassanshaikley/scary-spoders">game</a>.
		<br />
		Developed features for a photoshop like web application for <a href="https://www.autofusion.com">AutoFusion</a>.
		<br />
		<br />

		<h1>
		Me
		</h1>
		<img src={banf} alt="Logo" />

  </div>
)

export default IndexPage
