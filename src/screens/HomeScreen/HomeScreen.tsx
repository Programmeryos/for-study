import React, { useEffect } from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'home'>
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

export default HomeScreen
