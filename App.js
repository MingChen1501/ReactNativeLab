
import { StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentsScreen  from './StudentsScreen';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
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
    initialRouteName="Main">
      <Stack.Screen options={{headerShown: false}} name="Students" component={StudentsScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
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
