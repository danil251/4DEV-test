import * as React from "react"


const SvgComponent = ({ direction = "up", color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={7}
    fill="none"
    style={{ transform: `rotate(${direction === "down" ? "180deg" : "0"})`, cursor: 'pointer'}}
  >
    <path stroke={color} d="M10.5 1 6 6 1 1" strokeWidth="1.5"/>
  </svg>
)
export default SvgComponent
