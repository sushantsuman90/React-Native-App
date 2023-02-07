import React from 'react'
import {View, Text,Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { authentication } from '../../Config';
import {collection, getDocs, doc} from 'firebase/firestore/lite';
import {db} from '../../Config';
import firestore from '@react-native-firebase/firestore';


export default function DashBoard({navigation}) {

  const next= ()=>{
    // console.log("logout");
    navigation.navigate("Home");
  }
  const GetData = async ()=>{
    // const users = await firestore().collection(db,'cities').get();
    // const user = await firestore().collection('Users').doc('ABC').get()

    const citiesCol= await firestore.collection(db, 'cities');
    const citySnapshot =  await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc=> doc.data());
    console.log(cityList);
    // const subscriber = firestore()
    //   .collection('cities')
    //   .doc(userId)
    //   .onSnapshot(documentSnapshot => {
    //     console.log('User data: ', documentSnapshot.data())

  }

  return (
    <View>
        <Text> Login Sucessful</Text>
        <Button title='getdata' onPress={GetData}/>
        <Button title='logout' onPress={next}/>
    </View>
  )
}
