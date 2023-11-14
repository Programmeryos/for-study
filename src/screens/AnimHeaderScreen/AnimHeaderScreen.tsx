import React, { useEffect } from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RootStackScreenProps } from '../../navigation/types'
import Animated from 'react-native-reanimated'

type Props = RootStackScreenProps<'home'>
const AnimHeaderScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Animated.View
        className="py-[40] bg-blue-400"
        sharedTransitionTag="sharedTag"
      >
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
        <Text className="text-center">HEADER</Text>
      </Animated.View>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.goBack()}
          className="text-[22px] text-center"
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AnimHeaderScreen
