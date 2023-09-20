/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const anim = useSharedValue(0)

  const animation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: anim.value,
        },
      ],
    }
  })

  useEffect(() => {
    anim.value = withRepeat(withTiming(70, { duration: 1000 }), -1, true)
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Animated.View style={animation}>
        <TouchableOpacity>
          <Text className='text-[#ec1010] text-center text-[17px]'>Юля підспівуй</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

export default App
