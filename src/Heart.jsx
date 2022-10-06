import React from 'react'
import { animated } from 'react-spring'

import './App.css'

const Heart = ({ onClick, ...restProps }) => {
  return (
    <animated.div className="heart-wrapper" {...restProps} onClick={onClick}>
      <div className="heart-shape" />
      <h2 className="heart-text">Потрогай меня)</h2>
    </animated.div>
  )
}

export default Heart
