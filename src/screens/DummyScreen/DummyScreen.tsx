import React from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'home'>
const DummyScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>DummyScreen</Text>
    </SafeAreaView>
  )
}

export default DummyScreen
