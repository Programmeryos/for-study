import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'

import { ROUTES } from './routes'

import HomeScreen from '../screens/HomeScreen'
import AnimHeaderScreen from '../screens/AnimHeaderScreen'
import AcardeonScreen from '../screens/AcardeonScreen'
import FlatListScreen from '../screens/FlatListScreen'

const { Navigator, Screen } = createStackNavigator()

const NavigatorComp = () => (
  <Navigator
    initialRouteName={ROUTES.HomeScreen}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name={ROUTES.HomeScreen} component={HomeScreen as React.FC} />
    <Screen
      name={ROUTES.AnimHeaderScreen}
      component={AnimHeaderScreen as React.FC}
      options={{
        transitionSpec: {
          open: {animation: 'timing', config: {duration: 500}},
          close: {animation: 'timing', config: {duration: 500}}
        } ,
        cardStyleInterpolator: ({current}) => ({
          cardStyle: {
            opacity: current.progress,
            transform: [
              {
                scale: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1000, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }
        }),
      }}
    />
    <Screen
      name={ROUTES.AcardeonScreen}
      component={AcardeonScreen as React.FC}
    />
    <Screen
      name={ROUTES.FlatListScreen}
      component={FlatListScreen as React.FC}
    />
  </Navigator>
)

export default NavigatorComp
