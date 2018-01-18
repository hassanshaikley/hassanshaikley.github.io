import React from 'react'
import PropTypes from 'prop-types'
import Anime from 'react-anime';



export class Left extends React.Component {
  render() {
    return(
      <div id="k" style={{ width: '40%', minWidth: '120px'}}>
        {this.props.children}
      </div>
    )

  }
}
