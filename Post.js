import { StyleSheet, Text,Image, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function Post(props) {
  const [likes, setLikes] = useState(0);

  function increaseLikes(){
    setLikes(likes+1)
  }

  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseLikes}>
        <Text>Like{likes}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor:'#555',
    color: '#fff',
    height: 400,
  width: 300,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})