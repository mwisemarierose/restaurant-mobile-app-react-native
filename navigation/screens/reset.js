import { useNavigation } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet,Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import image from "../../assets/image.png"



export default function ResetScreen(){
const navigation=useNavigation();

    return(
        <SafeAreaView style={{flex:1}}>
            <View>
           <TouchableOpacity onPress={()=>navigation.navigate("MainContainer")}>
           <Ionicons name="arrow-back-circle-outline" size={38} color='#12bbc7' style={{marginLeft:20,marginTop:10}}  />
</TouchableOpacity>
</View>

<View style={styles.loginpage}>
<Image source={image} style={styles.logo}/>


    <Text style={{fontSize:30,fontWeight:"bold"}}>Reset your password!</Text>
    {/* <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'}>  */}
<TextInput style={styles.input} placeholder="New Paswword"/>
<TextInput style={styles.input} placeholder=" Confirm New Paswword"/>

<TouchableOpacity style={styles.login} onPress={()=>navigation.navigate('Login')}>
    <Text style={{fontSize:20, padding:5}}>Rest Password</Text>
</TouchableOpacity>

{/* </KeyboardAvoidingView> */}
</View>
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
            width:190,
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