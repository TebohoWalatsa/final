import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Successfully () {
    const navigation = useNavigation();
  return (
    <View style={styles.middle}>
        <Image source={require('./images/chack.png')} style={{width: 100, height: 100, marginHorizontal: 40, alignSelf: 'center'}}/>
      <Text  style={{alignSelf: 'center', color: 'green'}}>Successfully Registered</Text>
      <TouchableOpacity style={styles.myame}
            onPress={() =>
              navigation.navigate("Start", {})
            }
        >
          <Text>Menu</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    middle:{
        margin: 'auto'
    },
    myame:{
        alignSelf:'center',
        backgroundColor: '#0f0f',
        padding: 10,
        borderRadius: 10,
        marginTop: 40,

    }
})