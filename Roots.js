import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import Start from "./StartScreen";
import Register from "./Register";
import Successfully from "./Success";
import { Header } from "react-native/Libraries/NewAppScreen";

const stack = createNativeStackNavigator();

export default function Roots(){
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name="Start"
                component={Start}
                options={
                    {
                        headerShown: false
                    }
                }/>
            <stack.Screen name="Register"
                component={Register}
                options={
                    {
                        headerShown: false
                    }
                }/>            
                <stack.Screen name="Welcome"
                component={Login}
                options={
                    {
                        headerShown: false
                    }
                }/>
                <stack.Screen name="Success"
                component={Successfully}
                options={
                    {
                        headerShown: false
                    }
                }/>
                <stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        headerShown: false
                    }
                }/>
            </stack.Navigator>
         </NavigationContainer>
         
    );
}