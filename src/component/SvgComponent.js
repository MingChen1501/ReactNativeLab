import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
import { View, Image, StyleSheet } from "react-native"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <View>
      <Image
        source={require('../public/images/login-register.png')}
        style={{ 
          width: '70%', 
          height: '75%', 
          position: 'absolute',
          top: '15%', // Đặt ở giữa theo chiều dọc
          left: '15%', // Đặt ở giữa theo chiều ngang
          }}
      />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={414}
        height={263}
        viewBox="0 0 414 263"
        fill="none"
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
    </View>
    
  )
}

export default SvgComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Căn chỉnh ngang
    justifyContent: 'center', // Căn chỉnh dọc
  },
  svgContainer: {
    position: 'relative', // Để ảnh trong SVG có thể được căn chỉnh tùy chỉnh
    width: 414,
    height: 263,
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '50%', // Đặt ở giữa theo chiều dọc
    left: '50%', // Đặt ở giữa theo chiều ngang
    marginLeft: -50, // Điều chỉnh vị trí ngang của ảnh (-width/2)
    marginTop: -50, // Điều chỉnh vị trí dọc của ảnh (-height/2)
  },
});
