import React from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'home'>
const AcardeonScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>AcardeonScreen</Text>
    </SafeAreaView>
  )
}

export default AcardeonScreen
