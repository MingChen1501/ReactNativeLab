import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'


const ButtonView = (props) => {
  return (
    <Pressable 
    style={[
        styles.stylePressable, 
        {marginTop: props.marginTop}
    ]}
    onPress={() => {
      console.log(props.account)
    }}>
    <Text>{props.title}</Text>
    </Pressable>
  )
}

export default ButtonView

const styles = StyleSheet.create({
    stylePressable: {
        margin: 10,
        backgroundColor: "white",
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center"
    }
})