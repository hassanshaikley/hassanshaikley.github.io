import React from 'react'
import PropTypes from 'prop-types'

export const Right = ({ children, className, style }) => {

  const styles = Object.assign({}, style || {})

  return (

    <div id="right-div" style={styles} className={className}>
      {children}
    </div>
  )

}
