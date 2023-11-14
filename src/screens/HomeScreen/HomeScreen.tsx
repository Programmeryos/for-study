import React, { useEffect } from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RootStackScreenProps } from '../../navigation/types'
import Animated from 'react-native-reanimated'

type Props = RootStackScreenProps<'home'>
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Animated.View
        className="py-[20] bg-blue-400"
        sharedTransitionTag="sharedTag"
      >
        <Text className="text-center">HEADER</Text>
      </Animated.View>
      <TouchableOpacity onPress={() => navigation.navigate('anim-header')}>
        <Text className="mt-[20] text-[22px] text-center">
          Anim Header Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('acardeon')}>
        <Text className="mt-[20] text-[22px] text-center">
          Acarderon Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('flat-list')}>
        <Text className="mt-[20] text-[22px] text-center">FlatList Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
