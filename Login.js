
import React, {useEffect, useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { View,value,onChange, Text,Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


 export default function Login () {
    // navigation object
    const navigation = useNavigation();

  
    return(
      <View>
      <ScrollView style={styles.whole}>
        
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.login}>Enter Username</Text>
        <TextInput style={styles.input} id='idName' 
              value={value}
              onChangeText={onChange}
              placeholder="Email"
              />
        <Text style={styles.login}>Password</Text>
        <TextInput style={styles.input}  id='idword' 
        value={value}
        onChangeText={onChange}
        placeholder="Password"
        secureTextEntry/>
        
        <View style={styles.buttons}>
        <TouchableOpacity  style={styles.cbutton}
        onPress={() =>
          navigation.navigate("Start", {})
        }>
          <Text>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lbutton} 
        onPress={() =>
          navigation.navigate("HomeScreen", {})
        }>
          <Text >CONFIRM</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.login}>Login using</Text>
        <View style={styles.other}>
          <TouchableOpacity>
          <Image source={require('./images/linkedin.png')} style={{width: 40, height: 40, marginHorizontal: 40}}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('./images/facebook.png')} style={{width: 40, height: 40, marginHorizontal: 40}}/>
          </TouchableOpacity>
          <TouchableOpacity >
          <Image source={require('./images/instagram.png')} style={{width: 40, height: 40, marginHorizontal: 40}}/>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </View>
    );
 };
 const styles = StyleSheet.create({
  title:{
    paddingTop: 10,
    fontSize: 24,
    color: 'green',
  },
  login:{
    textAlign: 'center',
    fontFamily: '',
    paddingTop: 30,
  },
  buttons:{
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
  lbutton:{
    backgroundColor: 'green',
    borderColor: 'Black',
    borderRadius: 10,
    textShadowColor: 'grey',
    padding: 10,
  },
  cbutton:{
    backgroundColor: 'red',
    borderColor: 'Black',
    borderRadius: 10,
    textShadowColor: 'grey',
    padding: 10,
  },
  input:{
    borderColor: 'blue',
    borderRadius: 20,
    borderWidth: 3,
    textAlign: 'center',
    color: 'Black',
    width: 300,
    alignSelf: 'center'
  },
  whole:{
    backgroundColor:'grey',
    color: '#fff',
    marginTop: 60,
  },
  other:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  }
  });