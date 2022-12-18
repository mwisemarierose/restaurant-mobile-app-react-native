import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput,ActivityIndicator, TouchableOpacity, View,SafeAreaView, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { AsyncStorage } from "react-native";
export default function SignUpScreen(){
    const navigation=useNavigation();
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');
    const[cpassword,setCPassword]=useState('')

    const [isLoading,setLoading]=useState(false);
    const Signup=async()=>{
        if(email==""||password==""||username==""||phone==""||cpassword==""){
            Alert.alert(
                'Warning',
                'please fill all field',
                [
                    {
                        text: 'Ok',
                        onPress: () =>{
                          navigation.navigate('signup')
                      }
                      }
                ],
                    {cancelable: false}
                  )
        }
        else if(cpassword!=password){
            Alert.alert(
                'Warning',
                'password mismatch',
                [
                    {
                        text: 'Ok',
                        onPress:()=>{
                            navigation.navigate('signup')
                        }
                    }
                ],
                {cancelable:false}
            )
        }
        else{
            setLoading(true)
            try{
              const users = JSON.stringify({
                username: username,
                email: email,
                phone:phone,
                password: password,
              
              });
              const config = {
                  headers: {
                  'Content-Type': 'application/json'
                  }
                    };
          const response = await axios.post('https://restaurant-d0t69ard0-mwiseneza.vercel.app/users/signup',users,config);
          if(response.data.error){
            setLoading(false)
              Alert.alert(
                    'Notification',
                    `${response.data.error}`,
                [
                  {
                    text: 'Ok',
                    onPress: () =>{
                      navigation.navigate('signup')
                  }
                  },
                ],
                { cancelable: false}
              )
            }
            else{
                setLoading(false)
                Alert.alert(
                   'Success',
                   'account was successfully created!',
                   [
                     {
                       text: 'Ok',
                       onPress: () =>{
                         navigation.navigate('MainContainer')
                     }
                     },
                   ],
                   { cancelable: true}
                 )
                }
              }
              catch(e){
              }
              
            }
    }


    return(
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:'center'}}>

            {isLoading?
            <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Welcome to FineFood...</Text></View>:(
           
           <View style={{flex:1}}>
            <View>
           <TouchableOpacity onPress={()=>navigation.navigate("MainContainer")}>
           <Ionicons name="arrow-back-circle-outline" size={38} color='#12bbc7' style={{marginLeft:20,marginTop:10}} />
</TouchableOpacity>
</View>
        
<View style={styles.loginpage}>
    <Text style={{fontSize:30,fontWeight:"bold"}}>Get Started with!</Text>
    <Text style={{fontSize:18,fontWeight:"normal"}}> FineFood</Text>
    
<TextInput style={styles.input} placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}/>
<TextInput style={styles.input} placeholder="chooce your Username" 
onChangeText={(text)=>setUsername(text)}/> 
<TextInput style={styles.input} placeholder="Enter phone number with country code" 
onChangeText={(text)=>setPhone(text)} keyboardType="numeric"/>
<TextInput style={styles.input} secureTextEntry={true} placeholder="create your password"
onChangeText={(text)=>setPassword(text)}/>
<TextInput style={styles.input} secureTextEntry={true} placeholder="confirm your password"
onChangeText={(text)=>setCPassword(text)}/>


<TouchableOpacity style={styles.login} onPress={()=>Signup()}>
    <Text style={{fontSize:20, padding:5}}>SignUp</Text>
</TouchableOpacity>

    <Text style={{color:"blue",marginTop:20,paddingBottom:10}} 
    onPress={()=>navigation.navigate('MainContainer')}>Already have account?</Text>
</View>
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
            
    }
)