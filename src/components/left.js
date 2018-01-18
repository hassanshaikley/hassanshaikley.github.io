import React from 'react'
import PropTypes from 'prop-types'

export class Left extends React.Component {
  render() {
    return(
      <div id="k" style={{ width: '40%', minWidth: '120px'}}>
        {this.props.children}
      </div>
    )

  }
}
