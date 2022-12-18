import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView,SafeAreaView,ActivityIndicator, StyleSheet,Image, Text, TextInput, TouchableOpacity, View,Alert } from "react-native";
import image from "../../assets/image.png";
import { AsyncStorage } from "react-native";

export default function LoginScreen(){
const navigation=useNavigation();
const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [isLoading,setLoading]=useState(false);
    const Signin=async()=>{
        if(email=="" || password==""){
          Alert.alert(
            'Warning',
            'All field are required!',
            [
              {
                text: 'Ok',
                onPress: () =>{
                  navigation.navigate('Login')
              }
              },
            ],
            { cancelable: false}
          )
        }
        else{
            setLoading(true)
            try{
              const users = JSON.stringify({
                email:email,
                password:password
              });
              const config = {
                  headers: {
                  'Content-Type': 'application/json'
                  }
                    };
          const response = await axios.post('https://restaurant-d0t69ard0-mwiseneza.vercel.app/users/signin',users,config);
          if(response.data.error){
            setLoading(false)
              Alert.alert(
                'Error',
                `${response.data.error}`,
                [
                  {
                    text: 'Ok',
                    onPress: () =>{
                      navigation.navigate('MainContainer')
                  }
                  },
                ],
                { cancelable: false}
              )
            }
            else{
              setLoading(false)
              await AsyncStorage.setItem('token',response.data.token);
              navigation.navigate('dashboard') 
            }
              }
              catch(e){
    console.log(e)
              }
            }}
useEffect(()=>{
    
})
    return(
       

<SafeAreaView style={styles.loginpage}>
{isLoading?
            <View style= {styles.activityIndicator}>
              <ActivityIndicator
              style= {styles.indicator}
              size={70}
              /><Text style={styles.signup}>Welcome to FineFood...</Text></View>:(
                <View style={styles.loginpage}>
    <Image source={image} style={styles.logo}/>

    <Text style={{fontSize:30,fontWeight:"bold"}}>Welcome Back</Text>
    <Text style={{fontSize:18,fontWeight:"normal"}}>to FineFood</Text>

    {/* <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}>  */}
<TextInput style={styles.input} placeholder="enter Email or username" onChangeText={(text)=>setEmail(text)}/>
<TextInput style={styles.input} secureTextEntry={true} placeholder="enter your password" onChangeText={(text)=>setPassword(text)}/>
<TouchableOpacity style={styles.login} onPress={()=>Signin()}>
    <Text style={{fontSize:20, padding:5}}>Login</Text>
</TouchableOpacity>

    <Text style={{color:"blue",marginTop:20,paddingBottom:10}} onPress={()=>navigation.navigate('forget')}>Forget your Password?</Text>


    <Text style={{color:"blue",}} onPress={()=>navigation.navigate('signup')}>Don't you have any Account?</Text>
{/* </KeyboardAvoidingView> */}
</View>
)}
</SafeAreaView>
             
    )
}
const styles= StyleSheet.create(
    {
        loginpage:{
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
        },
        input:{
            borderColor: '#12bbc7',
            borderWidth:1,
            margin:10,
            width:300,
            height:40,
            borderRadius:10,
            textAlign:'center',
        },
        login:{
            borderWidth:1,
            borderColor:'white',
            backgroundColor:'#12bbc7',
            width:90,
            height:40,
            borderRadius:10,
            position:'relative',
            top:10,
            alignItems:"center",
                       
            },
            logo:{
                width:100,
                height:100,
                marginTop:15,
                marginLeft:10,
                zIndex:1,
            }
            
    }
)