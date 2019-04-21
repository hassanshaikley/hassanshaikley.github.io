import React from 'react'
import PropTypes from 'prop-types'

export class Left extends React.Component {

  render() {

    const styles = Object.assign({ width: '40%', minWidth: '255px', margin: 0 }, this.props.style || {})
    return (
      <div style={styles} className={this.props.className} >
        {this.props.children}
      </div>
    )

  }
}
