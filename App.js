
import { Text, TouchableOpacity , View, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'

import StudentsScreen  from './src/view/StudentsScreen';
import HomeScreen from './src/view/HomeScreen';
import PostManagerScreen from './src/view/PostManagerScreen';
import ProfileScreen from "./src/view/ProfileScreen";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>  
  );
}

const MainTabScreen = () => {
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0277BD',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 10,
        },
        headerTitleAlign: 'left',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#0277BD' }} />
        ),
        tabBarShowLabel: false,
      }}
    >
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Search"
        component={StudentsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Notification"
        component={PostManagerScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </tab.Navigator>
  )
}
function MyStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
	      headerMode: 'screen',
	      headerTintColor: 'white',
	      headerStyle: { backgroundColor: '#0277BD' },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: 'bold',
          marginLeft: 10,
        },
      }}>
      <Stack.Screen
        name="MainTabScreen"
        component={MainTabScreen}
        options={{
          headerShown: false
      }}
        />
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
