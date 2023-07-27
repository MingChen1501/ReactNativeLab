
import { StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentsScreen  from './src/view/StudentsScreen';
import MainScreen from './src/view/MainScreen';
import LoginScreen from './src/view/LoginScreen';
import PostManageScreen from './src/view/PostManageScreen';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>  
  );
}
function MyStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Login">
      <Stack.Screen options={{headerShown: false}} name="Students" component={PostManageScreen} />
      <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
