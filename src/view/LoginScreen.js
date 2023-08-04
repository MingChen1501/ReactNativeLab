import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonView from '../component/ButtonView'
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 
import LoginErrorCode from '../utils/LoginErrorCode';
import SvgComponent from '../component/SvgComponent';

const LoginScreen = (props) => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheck = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

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
        marginBottom: 53
      }}>
        <TouchableOpacity
        style={{borderBottomWidth: 1}}>
          <Text style={{
            color: "#0386D0",
            fontWeight: "400",
            fontSize: 25,
          }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            color: "#A6A6A6",
            fontWeight: "400",
            fontSize: 25,
          }}>Register</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.passwordContainer}>
        <AntDesign name="mail" size={24} color="gray" />
        <TextInput 
          style={styles.passwordInput}
          placeholder="Email Address"
          onChangeText={(text) => setUserName(text)}
          />
      </View>
      <View style={styles.passwordContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="gray" />
        <TextInput 
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}>
            <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="gray" />
          </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
      }}>
        <TouchableOpacity 
          onPress={handleToggleCheck}
          style={{
            flexDirection: 'row',
            width: '40%',
          }}>
          <AntDesign 
            name={isChecked ? 'closesquareo' : 'checksquareo'}
            size={24} 
            color="gray" />
          <Text style={{
            fontSize: 21,
            marginLeft: 10,
            color: 'gray'
          }}>Remember Me</Text>
        </TouchableOpacity>
       <TouchableOpacity
        style={{width: '40%'}}>
          <Text style={{
            color: "#0386D0",
            fontWeight: "400",
            fontSize: 21,
          }}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonView
        title="Login"
        marginTop={20}
        account={{username, password}}
        navigation={props.navigation}
        setModalVisible={setModalVisible}
        setErrorCode={setErrorCode}
        />

      <SvgComponent/>
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
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 50,
    },
    title: {
      marginTop: 70,
      color: "#000000",
      textAlign: "center",
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 47.2,
    },
    passwordInput: {
      marginLeft: 10,
      flex: 1,
      fontSize: 20,
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