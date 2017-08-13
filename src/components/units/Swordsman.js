import React from 'react'
import {PropTypes} from 'prop-types'

function Swordsman({color}) {
  return(
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      version="1.1"
      style={{cursor: 'pointer'}}
    >
      <g>
        <path
          fill={color}
          d="m 8.0036295,7.4445382 0,10.4316408 L 61.742341,71.690811 72.082185,60.975967 18.62277,7.4445382 Z m 71.7836335,48.8322108 -24.435547,25 5.169922,5.732421 24.716799,-25.28125 z m 0.56445,13.345703 -9.962887,10.33789 13.535161,13.533203 10.150388,-10.15039 z"
        />
      </g>
    </svg>
  )
}

Swordsman.propTypes = {
  color: PropTypes.string,
}

Swordsman.defaultProps = {
  color: 'black'
}

export default Swordsman
