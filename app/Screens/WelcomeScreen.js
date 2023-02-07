import React from 'react'
import { Image, ImageBackground, TextInput,Button,Text, StyleSheet, View, Alert,TouchableHighlight  } from 'react-native'
import { authentication } from '../../Config'
import { signInWithEmailAndPassword , signOut} from 'firebase/auth'
import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function WelcomeScreen({navigation, route}) {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signPage= ()=>{
        navigation.navigate("SignUp");
    }

    const RegisterUser = ()=>{
        signInWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
            console.log(re);
           
            navigation.navigate("Home");
        })
        .catch((re)=>{
            console.log(re);
            Alert.alert("Wrong Email or Password");
        })
    }

  

  return (
   <ImageBackground style={styles.background} source={require("../assets/chs.png")}>
    <Image style={styles.logo} source={require("../assets/logo.png")} />
    <View style={styles.input}>
    <TextInput style={{fontSize: 18}} placeholder='Username' value={email} onChangeText={text=>setEmail(text)}/>
    <TextInput style={{fontSize: 18}} placeholder='Password' secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}/>
    {/* {isSignedIn===true?
    <Button title='Log Out' onPress={RegisteOutUser}/>
} */}
    <Button title='Login' onPress={RegisterUser}/>
    </View>
    <TouchableHighlight style={styles.loginButton} onPress={signPage}>

    <View ><Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Sign-Up</Text></View>
    </TouchableHighlight>
    {/* <View style={styles.registerButton}></View> */}
    
   </ImageBackground>
  )
}

const styles =StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems:"center",
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
        alignItems: "center",
        justifyContent: "center",
        
        
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
        
    },
    logo:{
        width: 250,
        height: 250,
        position: "absolute",
        top:70,
    },
    input:{
        backgroundColor: "#fff",
        padding: 20,
        width: 290,
        height: 250,
        bottom: 80,
        justifyContent: "space-around"
    }
})
