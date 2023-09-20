import React, { useEffect } from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'home'>
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('anim-header')}
          className="text-[22px] text-center"
        >
          Anim Header Screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen
