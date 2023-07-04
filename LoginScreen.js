import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ButtonView from './ButtonView'

const LoginScreen = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      LoginScreen
      </Text>
      <TextInput 
        style={styles.inputText}
        placeholder="enter your username"
        onChangeText={(text) => setUserName(text)}
        />
      <TextInput 
        style={styles.inputText}
        placeholder="enter your password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        />
      <ButtonView
        title="login"
        marginTop={20}
        account={{username, password}}
        />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center"
    },
    title: {
        marginTop: 50,
        fontSize: 50,
        color: "white"
    },
    inputText: {
        width: Dimensions.get("window").width - 20,
        height: 50,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        margin: 12,
        padding: 10,
        fontSize: 20,
        color: "white"
    }
})