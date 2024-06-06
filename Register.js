import { StyleSheet, Text, View,TextInput,value,onChange,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import SQLite,{successCB,errorCB } from 'react-native-sqlite-2';

const db = SQLite.openDatabase(
  {
    name:'MainDB',
    locatio: 'default'

  },
  ()=>{},
  error=>{console.log(error);}
);

export default function Register() {
const [name, setname] = useState('');
const [surname, setsurname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
  createtable();
  
}, [])
const createtable= () => {
  db.transaction(txn => {
    console.log(txn);
    txn.executeSql(
        "CREATE TABLE IF NOT EXISTS USERS(USER_ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME VARCHAR(30), SURNAME VARCHAR(30), EMAIL VARCHAR(30), PASSWORD VARCHAR(30))",
        [],
        successCB,
        errorCB
    );
  })
}
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={styles.main}>
      <Text style={styles.login}>Name</Text>
        <TextInput style={styles.input} id='idName' 
              value={name}
              onChangeText={onChange}
              placeholder="Teboho"
              />
              <Text style={styles.login}>Surname</Text>
        <TextInput style={styles.input} id='surname' 
              value={surname}
              onChangeText={onChange}
              placeholder="Walatsa"
              />
              <Text style={styles.login}>Email</Text>
        <TextInput style={styles.input} id='Email' 
              value={email}
              onChangeText={onChange}
              placeholder="tebohowalatsa@gmail.com"
              />
              <Text style={styles.login}>Password</Text>
        <TextInput style={styles.input} id='password' 
              value={value}
              onChangeText={onChange}
              placeholder="Password"
              />
              <Text style={styles.login}>Confirm password</Text>
        <TextInput style={styles.input} id='confirmation' 
              value={password}
              onChangeText={onChange}
              placeholder="Password"
              
              />
         
        <TouchableOpacity style={styles.Register}
            onPress={() =>
              navigation.navigate("Success", {})
            }
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    login:{
        textAlign: 'left',
        fontFamily: '',
        paddingTop: 20,
        paddingLeft: 50
      },
    input:{
        borderColor: 'blue',
        borderWidth: 3,
        textAlign: 'center',
        color: 'Black',
        width: 300,
        alignSelf: 'center'
      },
      Register:{
        marginTop: 20,
        alignSelf:'flex-end',
        marginRight: 20,
        backgroundColor: '#555',
        padding: 10,
        borderRadius: 20
      },
      main:{
        margin: 'auto',
        paddingTop: 20,
      }
})