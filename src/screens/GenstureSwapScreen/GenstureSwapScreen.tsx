import React from 'react'
import { Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, {
  SharedValue,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { RootStackScreenProps } from '../../navigation/types'

type DataItemType = { id: number; title: string }

const data: DataItemType[] = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
  { id: 5, title: '5' },
]

type Props = RootStackScreenProps<'gensture-swap'>

const GenstureSwapScreen: React.FC<Props> = ({ navigation }) => {
  const itemHeight = 75
  const offsetValues = useSharedValue(data.map((item, idx) => idx * itemHeight))

  const renderListItem = ({
    item,
    index,
  }: {
    item: DataItemType
    index: number
  }) => {
    return (
      <PanItem
        title={item.title}
        currentValue={offsetValues.value[index]}
        itemHeight={itemHeight}
        values={offsetValues}
        index={index}
      />
    )
  }

  return (
    <SafeAreaView className="flex-1 px-[24]">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderListItem}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  )
}

interface PanItemProps {
  title: string
  currentValue: number
  itemHeight: number
  values: SharedValue<number[]>
  index: number
}

const PanItem: React.FC<PanItemProps> = ({
  title,
  currentValue,
  itemHeight,
  values,
  index,
}) => {
  const currentOffset = useSharedValue(currentValue)
  const startY = useSharedValue(0)
  const changeIndex = useSharedValue(index)

  // const updateOffsetValues = (index: number, newValue: number) => {
  //   const newValues = [...values.value]
  //   newValues[index] = newValue
  //   values.value = newValues
  // }

  const updateOffsetValues = (newValues: number[]) => {
    values.value = newValues
  }

  const swapOffsets = (fromIndex: number, toIndex: number) => {
    const newValues = [...values.value]
    const oldFromIndex = newValues[fromIndex]
    const oldToIndex = newValues[toIndex]

    newValues[toIndex] = oldFromIndex

    runOnJS(updateOffsetValues)(newValues)
  }

  const pan = Gesture.Pan()
    .onStart(() => {
      startY.value = currentOffset.value
    })
    .onUpdate((e) => {
      currentOffset.value = startY.value + e.translationY
      const newIndex = Math.round(currentOffset.value / itemHeight)
      if (changeIndex.value !== newIndex) {
        const toChange = values.value.indexOf(newIndex * itemHeight)
        const renderChange = toChange >= 0 ? toChange : values.value.length - 1
        changeIndex.value = renderChange

        console.log(renderChange)
        runOnJS(swapOffsets)(index, renderChange)
      }
    })
    .onEnd(() => {
      currentOffset.value = withSpring(values.value[index])
    })

  const animated = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: '100%',
      height: itemHeight,
      transform: [
        {
          translateY: currentOffset.value,
        },
      ],
    }
  })

  useAnimatedReaction(
    () => values.value[index],
    (newValue) => {
      currentOffset.value = newValue
    },
    [values, index]
  )

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        className="border-black border-2 rounded-2xl items-center justify-center"
        style={animated}
      >
        <Text>{title}</Text>
      </Animated.View>
    </GestureDetector>
  )
}

export default GenstureSwapScreen
