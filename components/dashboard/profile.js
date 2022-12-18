import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View ,TouchableOpacity, StyleSheet, Image  } from "react-native";
import image from '../../assets/profile.jpg';
import { Ionicons } from '@expo/vector-icons';


export default function Profile(){
    const navigation=useNavigation();
    return (
        <View style={{flex:1,marginTop:50,marginLeft:50}}>
            <View>
            <Image source={image} style={styles.circle}/>
            <Text style={{fontSize:20,
            fontWeight:'800',
            marginTop:10}}>Trophime KARASISI</Text>
            <Text style={{fontWeight:'600',
        marginBottom:1}}>tel:+250 786 866 091</Text> 
        <Text style={{fontWeight:'600',
        marginBottom:10}}>Email: trophime3@gmail.com</Text> 
            </View>
            <View>
                <Text style={{fontSize:18,
                marginTop:50,
                marginRight:40}}>
                    Hello mr/mrs Trophime KARASISI thank you for being with us 
                    if you receive your delivered food please notify us by click the approve button!
                    if not contact us on : +250 788 888 888!
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>alert('enjoy😋')}>
                    <Text style={{fontSize:18,fontWeight:'800',textAlign:'center'}}>Approve</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('MainContainer')} style={styles.logout}>
            <Ionicons name="log-out" size={26} color='#12bbc7'/>
                <Text style={{fontSize:18}}>SignOut</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    circle:{
        marginLeft:0,
        width:80,
        height:80,
        borderRadius:50,
        borderWidth:4,
        borderColor:'#12bbc7',
        
    },
    button:{
        marginTop:30,
        width:100,
        height:30,
        borderWidth:3,
        borderRadius:10,
        marginLeft:100,
        borderColor:'#12bbc7',
        backgroundColor:'#12bbc7',   
    },
    logout:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        bottom:20,
        right:20
    },

})
