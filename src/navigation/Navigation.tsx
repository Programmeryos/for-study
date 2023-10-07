import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ROUTES } from './routes'

import HomeScreen from '../screens/HomeScreen'
import AnimHeaderScreen from '../screens/AnimHeaderScreen'
import AcardeonScreen from '../screens/AcardeonScreen'

const NavigationStack = createNativeStackNavigator()

const Navigator = () => (
  <NavigationStack.Navigator
    initialRouteName={ROUTES.HomeScreen}
    screenOptions={{
      headerShown: false,
    }}
  >
    <NavigationStack.Screen
      name={ROUTES.HomeScreen}
      component={HomeScreen as React.FC}
    />
    <NavigationStack.Screen
      name={ROUTES.AnimHeaderScreen}
      component={AnimHeaderScreen as React.FC}
    />
    <NavigationStack.Screen
      name={ROUTES.AcardeonScreen}
      component={AcardeonScreen as React.FC}
    />
  </NavigationStack.Navigator>
)

export default Navigator
