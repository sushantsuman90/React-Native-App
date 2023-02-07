import React from 'react'
import { Image, ImageBackground, TextInput,Button,Text, StyleSheet, View, Alert } from 'react-native'
import { authentication } from '../../Config'
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function SignUp({navigation}) {

    // const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const RegisterUser = ()=>{
        createUserWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
            console.log(re);
            // setIsSignedIn(true);
            navigation.navigate("homepage");
        })
        .catch((re)=>{
            console.log(re);
            Alert.alert("Make sure Password has atlest 6 charachters");
        })
    }

   

  return (
   <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
    {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
    <View style={styles.input}>
    <TextInput style={{fontSize: 18}} placeholder='Username' value={email} onChangeText={text=>setEmail(text)}/>
    <TextInput style={{fontSize: 18}} placeholder='Password' secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}/>
    
    <Button title='Sign-Up' onPress={RegisterUser}/>
    </View>
    
   
    
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
        height: 300,
        bottom: 200,
        justifyContent: "space-around"
    }
})
