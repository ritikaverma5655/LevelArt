import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import UserRegisterScreen from './src/signup';
import UserLoginScreen from './src/auth/login';
import Home from './src/screen/Home';
import Header from './src/screen/Header';
import SearchScreen from './src/screen/Search';
import NotificationScreen from './src/screen/Notification';
import ProfileScreen from './src/screen/Profile';
import PostScreen from './src/screen/Post';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Register' component={UserRegisterScreen} />
      <Stack.Screen name='Login' component={UserLoginScreen} />
      <Stack.Screen name='Home' component={TabNavigator} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />

          ),
          headerShown: false, // Hide header for the Home screen

        }}
      />

<Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      {/* Add more tabs/screens as needed */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
