import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class BlogPage extends React.Component {

    render() {

        // const styles = Object.assign({ width: '40%', minWidth: '255px', margin: 0 }, this.props.style || {})
        const blogPosts = require('./posts.json')


        return (
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
                    <Link to="/">
                        {/* <div style={{ border: '1px solid black', borderRadius: 2, paddingLeft: 10, paddingRight: 10, cursor: 'pointer' }}> */}
                            <div>
                                Back
    
                    </div>
                    </Link>

                    <div>
                        {blogPosts.map(post => {
                            return (

                                <div>
                                    <h3 id={post.title.replace(/ /g, '-')}>
                                        {post.title}
                                    </h3>
                                    <p dangerouslySetInnerHTML={{ __html: post.body }}>
                                        {/* {post.body} */}
                                    </p>
                                </div>
                            )

                        })}
                        {/* <h1></h1> */}
                        {/* {this.props.children} */}
                    </div>
                </div>

            </div>

        )

    }
}
