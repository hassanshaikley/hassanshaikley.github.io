import React from 'react'
import Link from 'gatsby-link'

import banf from './banf.jpg'; // Tell Webpack this JS file uses this image


const IndexPage = () => (
  <div>
		<h1>Projects and Work</h1>
		<ul>
			<li> Developed data visualizations and other core features for <a href="http://stellaralgo.com">Stellaralgo Corp.</a> in Calgary.
			</li>
			<li> Major contributer to a <a href="https://github.com/pubpub">platform for collaborative science</a> at the MIT Media Lab.
			</li>
			<li> Created a <a href="http://aotb.io">multiplayer browser game</a> written in Node.js.
			</li>
			<li> Created a <a href="https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon">Who's That Pokemon!</a> game for a <a href="https://github.com/hzeller/flaschen-taschen">TV Made out of beer bottles, milk crates, and a rasberry PI</a>.
			</li>
			<li> Developed physics simulations for a <a href="https://www.teachtci.com/">company</a> based out of Mountain View, CA.
			</li>
			<li> Co-founded <a href="https://www.ishqr.com">a tech startup</a> that you can read about on <a href="https://www.npr.org/sections/codeswitch/2013/11/30/247572566/single-muslim-hipster-seeking-same-you-may-be-in-luck">NPR</a>.
			</li>
			<li> Turned a nightmare he had as a child into a <a href="https://github.com/hassanshaikley/scary-spoders">game</a>.
			</li>
			<li> Developed features for a photoshop like web application for <a href="https://www.autofusion.com">AutoFusion</a>.
			</li>
		</ul>
		
		<br />
		<hr />
		<br />

		<img src={banf} alt="A picture of me drinking coffee at Banff National Park." />

  </div>
)

export default IndexPage
