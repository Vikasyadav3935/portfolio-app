import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import TakePhotoScreen from './components/AddCamera';
import Final from './Screens/Final';




const Stack=createStackNavigator();

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    
        <Stack.Screen  name='Splash' component={Splash}  options={{headerShown:false}} />
        <Stack.Screen  name='Home' component={Home}  options={{headerShown:false}} />
        <Stack.Screen  name='TakePhotoScreen' component={TakePhotoScreen}  options={{headerShown:false}} />
        <Stack.Screen  name='Final' component={Final}  options={{headerShown:false}} />
    </Stack.Navigator>

   </NavigationContainer>
  )
}

export default AppNavigator