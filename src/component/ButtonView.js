import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const data = [
  {username: "mingchen", password: "mingchen"},
  {username: "teoteoteo", password: "123123"},
  {username: "tintintin", password: "123qweasd"},
]

const ButtonView = (props) => {
  const usernameAndPasswordValid = () => {
    return props.account.username.length < 6 || props.account.password.length < 6;
  }
  const handleLogin = () => {
    /* 
    //TODO: should be replaced with API call
    // response from API call should be an array of objects
    // request to API should be POST
    // example request to API:
    // POST https://example.com/api/login body {username: "mingchen", password: "mingchen"}
    // example response from API: HTTP 200 {accessToken: "1234567890"}
    // POST https://example.com/api/login body {username: "mingchen", password: "123456"}
    // example response from API: HTTP 401 {message: "Invalid username or password"}
    */

    if (data.some(item => item.username === props.account.username && item.password === props.account.password))
      return 1;
    else if (data.some(item => item.username === props.account.username && item.password !== props.account.password))
      return -1;
    else 
      return 0;
  }
  return (
    <Pressable 
    style={[
        styles.stylePressable, 
        {
          marginTop: props.marginTop,
          opacity: usernameAndPasswordValid() ? 0.5 : 1
        }
    ]}
    onPress={() => {
      const loginResult = handleLogin()
      if (loginResult === 1) {
        props.navigation.navigate('Students') 
      } else {
        props.setModalVisible(true)
        props.setErrorCode(loginResult)
      }
    }}
    disabled={usernameAndPasswordValid()}>
    <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}

export default ButtonView

const styles = StyleSheet.create({
    stylePressable: {
        margin: 10,
        backgroundColor: "#01579B",
        width: '80%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
      fontSize: 25,
      color: "white",
    }
})