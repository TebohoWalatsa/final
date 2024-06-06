import React from 'react';
import { useNavigation } from "@react-navigation/native";

 import { View, Button, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

 export default function SecondScreen({route}) {
    // navigation object
    const navigation = useNavigation();
    

    return(

        <SafeAreaView style={StyleSheet}>
            <TouchableOpacity
            onPress={() =>
            navigation.navigate("Login", {
              paramEmail: email,
            })
          }
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() =>
            navigation.navigate("Login", {
              paramEmail: email,
            })
          }
        >
          <Text>Register</Text>
        </TouchableOpacity>
            
        </SafeAreaView>
    );
 };