import { StyleSheet,TouchableOpacity,Image, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 20}}>
      <ImageBackground source={require('./images/back.jpg')}resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Welcome</Text>
    </ImageBackground>
      
      <View style={styles.new}>
      <TouchableOpacity style={styles.myname}
           onPress={() =>
            navigation.navigate("Welcome", {})
          }
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myname}
            onPress={() =>
              navigation.navigate("Register", {})
            }
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
        </View>
    
  )
}

const styles = StyleSheet.create({
    new:{
        alignSelf: 'center',
        flexDirection: 'row',
           
    },
    image:{
      height: 300
    },
    text: {
      color: '#fff',
      fontSize: 30,
      margin:'auto'
    },
    myname:{
      backgroundColor: 'green',
      borderColor: 'blue',
      borderStyle: 'solid',
      borderRadius: 10,
      margin: 10,
      padding: 20
    }

})