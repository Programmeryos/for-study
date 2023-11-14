import React, { useState, useCallback } from 'react'
import { FlatList, Text, Button, View } from 'react-native'

const MemoizedItem = React.memo(({ item }) => {
  console.log(item)

  return <Text>{item}</Text>
})

const MyFlatList = () => {
  const [data, setData] = useState([]) // Ваші дані

  // Додавання нового елементу до списку
  const addItem = useCallback(() => {
    setData((prevData) => [...prevData, 'Новий елемент'])
  }, [])

  const renderItem = ({ item }) => <MemoizedItem item={item} />

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Button title="Додати елемент" onPress={addItem} />
    </View>
  )
}

export default MyFlatList
