import React, { useEffect, useState } from 'react'

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedRef,
  useDerivedValue,
  runOnUI,
  measure,
} from 'react-native-reanimated'
import { ZoomIn, ZoomOut } from 'react-native-reanimated'

import { LayoutChangeEvent } from 'react-native'

import { RootStackScreenProps } from '../../navigation/types'

import styles from './styles'

type Props = RootStackScreenProps<'home'>
const AcardeonScreen: React.FC<Props> = ({ navigation }) => {
  const listRef = useAnimatedRef<Animated.View>()
  const heightValue = useSharedValue(0)
  const open = useSharedValue(false)
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  )

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }))

  return (
    <SafeAreaView className="px-[24]">
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (heightValue.value === 0) {
              runOnUI(() => {
                'worklet'
                heightValue.value = withTiming(measure(listRef)!.height)
              })()
            } else {
              heightValue.value = withTiming(0)
            }
            open.value = !open.value
          }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Hello World!</Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View className="bg-red-400" style={heightAnimationStyle}>
          <Animated.View style={styles.contentContainer} ref={listRef}>
            <Text>
              Hello wrold is Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Magnam amet nam dolorem veniam commodi, odio rerum ad,
              dolorum repellendus adipisci necessitatibus, fugiat harum? Dolorum
              libero quos alias quae sunt culpa!
            </Text>
          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default AcardeonScreen
