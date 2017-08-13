import React from 'react'
import {PropTypes} from 'prop-types'

function Axeman({color}) {
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
          d="m 33.5625,8.6425781 c -2.124002,-0.06816 -4.314521,0.1472517 -6.541016,0.6953125 L 25.88545,25.249415 44.950973,42.0417 57.578125,35.855469 C 60.019449,23.546482 48.430517,9.1196947 33.5625,8.6425781 Z M 22.728516,25.753906 9.5957031,26.005859 11.869141,37.875 83.841797,88.636719 88.136719,83.585938 Z m -6.81836,17.677735 -3.283203,4.041015 9.849609,10.353516 5.302735,-5.556641 z"
        />
      </g>
    </svg>
  )
}

Axeman.propTypes = {
  color: PropTypes.string,
}

Axeman.defaultProps = {
  color: 'black'
}

export default Axeman
