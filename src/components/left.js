import React from 'react'
import PropTypes from 'prop-types'

export class Left extends React.Component {
  render() {
    return(
      <div style={{ width: '40%', minWidth: '200px'}}>
        {this.props.children}
      </div>
    )

  }
}
