import React from 'react';
import { useNavigation } from "@react-navigation/native";

 import { View, Button, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Post from './Post';

 export default function HomeScreen({route}) {
    // navigation object
 
    return(
      <View>
        <ScrollView horizontal >
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        </ScrollView>
        <ScrollView>
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        <Post text="react-nativeiosandroidosxwindowsmacosreact-componentreact-native-componentreactmobileuiiconiconsvectorretinafontreact-native-vector-icons-iconevil-icons" />
        </ScrollView>
      </View>
    );
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'black',
alignItems: 'center',
justifyContent: 'center',
color: 'white'
},
nav:{
  flexDirection: 'row', 
},
horizontal:{
  height: 300,
  width: 200,
},
btn:{
  borderRadius: '1rem',
  margin: '4px'
  
},
event:{
  flex: 1,
  backgroundColor: '#f0f',
  color: 'white',
}
});
