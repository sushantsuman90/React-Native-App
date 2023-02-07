import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,TouchableHighlight,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'


export default function Home({navigation}) {

    const LogOut= ()=>{
        navigation.navigate("Welcome");
    }

        return(
           <ImageBackground
            source={require('../assets/Home.png')}
            style={{width:"100%",height:"100%"}}
           >
               <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                       <View style={{
                           paddingHorizontal:10,
                           paddingVertical:12,
                           borderRadius:10,
                           marginTop:30,
                           backgroundColor:"#d1a0a7"
                       }}>
                           <Image
                            source={require('../assets/hum.png')}
                            style={{height:15,width:20}}
                           />
                       </View>
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:40,
                       fontWeight: 'bold',
                       color:"#FFF"
                   }}>
                        E-learning App
                   </Text>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       backgroundColor:"#FFF",
                       padding:10,
                       borderRadius:12,
                       marginHorizontal:20,
                       marginTop:20
                   }}>
                       <TextInput
                            placeholder="Search for new knowledge!"
                            placeholderTextColor="#345c74"
                            style={{
                                fontWeight: 'bold',
                                fontSize:12,
                                width:280,
                                paddingHorizontal:12
                            }}
                       />
                       <Image
                            source={require('../assets/sear.png')}
                            style={{height:14,width:14}}
                       />
                   </View>
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:20,
                               fontWeight: 'bold',
                               width:250,
                               paddingRight:100 
                           }}>
                               University Courses
                           </Text>
                           <TouchableOpacity
                                // onPress={()=>this.props.navigation.navigate('Cources')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}>Categories</Text>  
                                    <Image
                                        source={require('../assets/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../assets/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>

                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:20,
                               fontWeight: 'bold',
                               width:250,
                               paddingRight:100 
                           }}>
                               Technical Courses
                           </Text>
                           <TouchableOpacity
                               
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}>Categories</Text>  
                                    <Image
                                        source={require('../assets/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../assets/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>

                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:20,
                               fontWeight: 'bold',
                               width:250,
                               paddingRight:100 
                           }}>
                               Development Courses
                           </Text>
                           <TouchableOpacity
                                
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}>Categories</Text>  
                                    <Image
                                        source={require('../assets/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../assets/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>

                    <TouchableHighlight style={{ width: "100%",
                                                height: 70,
                                                backgroundColor: "#fc5c65",
                                                alignItems: "center",
                                                justifyContent: "center",}} onPress={LogOut}>

                     <View ><Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Log-Out</Text></View>
                     </TouchableHighlight>


                  
               </ScrollView>
           </ImageBackground>
        )
    }
