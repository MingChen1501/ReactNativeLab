import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonView from './ButtonView'
import { MaterialIcons } from '@expo/vector-icons';
import LoginErrorCode from './LoginErrorCode';

const LoginScreen = (props) => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onModalClose = () => {
    setModalVisible(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const getErrorMessageFromMap = () => {
    console.log(errorCode)
    return LoginErrorCode.get(errorCode)
  }
  useEffect(() => {
    const error = getErrorMessageFromMap();
    setErrorMessage(error);
  }, [modalVisible])
  //performance issue: useEffect is called every time modalVisible is changed
  //solution: use useEffect with dependency array to call useEffect only when modalVisible is changed

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Login
      </Text>
      <View style={{
        marginTop: 70,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
      }}>
        <TouchableOpacity>
          <Text style={{
            color: "#0386D0",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            color: "#A6A6A6",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>Register</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        style={styles.inputText}
        placeholder="enter your username"
        onChangeText={(text) => setUserName(text)}
        />
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput}
          placeholder="enter your password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}>
            <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="gray" />
          </TouchableOpacity>
      </View>
      <ButtonView
        title="login"
        marginTop={20}
        account={{username, password}}
        navigation={props.navigation}
        setModalVisible={setModalVisible}
        setErrorCode={setErrorCode}
        />
        {/* 
        **mingchen note:
        LoginScreen have state modalVisible, which is passed to ButtonView as props callback setModalVisible
        ButtonView have props callback setModalVisible, which is can be called by ButtonView
        when props callback setModalVisible at ButtonView is called, it will change state modalVisible at LoginScreen
        LoginScreen have state modalVisible changed, which will trigger re-render of LoginScreen and show Modal component via conditional rendering
         */}
      <Modal
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onModalClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 3,
        backgroundColor: "white",
        alignItems: "center"
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '95%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    title: {
        marginTop: 50,
        color: "#000000",
        textAlign: "center",
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 47.2,
    },
    passwordInput: {
      flex: 1,
    },
    inputText: {
      width: '95%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    eyeIcon: {
      padding: 8,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      elevation: 5,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    closeButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
})