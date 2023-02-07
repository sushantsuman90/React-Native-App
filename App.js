import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Platform,  SafeAreaView} from 'react-native';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DashBoard from './app/Screens/DashBoard';
import SignUp from './app/Screens/SignUp';
import Home from './app/Screens/UserHome';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    // <WelcomeScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{headerShown: false}}
          name="welcome"
          component={WelcomeScreen}/>
        <Stack.Screen options ={{headerShown: false}} name="SignUp" component={SignUp} />
      <Stack.Screen  name="Home" component={Home} />
        {/* <Stack.Screen  name="DashBoard" component={DashBoard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

