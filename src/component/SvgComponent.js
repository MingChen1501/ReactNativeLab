import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
import { View, Image, StyleSheet } from "react-native"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"30%"}
      viewBox="0 0 414 263"
      fill="none"
      style={{ position: 'absolute', bottom: 0, left: 0 }}
      {...props}
    >
      <G filter="url(#filter0_d_9_282)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M414 110.735C368.155 155.467 289.205 185 199.5 185 118.923 185 47.024 161.172 0 123.904V329h414V110.735z"
          fill="#01579B"
        />
      </G>
      <Defs>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

