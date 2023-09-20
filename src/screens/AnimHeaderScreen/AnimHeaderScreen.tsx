import React, { useEffect } from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'home'>
const AnimHeaderScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
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
