import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text,ScrollView,Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import image from "../../../assets/cheeseBugger.jpeg"

export default function Order(){
    const [quantity,setQuantity]=useState('1');

    return(
        <SafeAreaView style={{flex:1}}>
          <ScrollView>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={image} style={styles.image}/>

                    </View>
                    <View >
                        <Text style={styles.name}>---------Chicken Bugger-------</Text>
                        <Text style={styles.ingredients}>bread,chicken meat,salade,chips</Text>
                        <Text style={styles.price}>Price:5000 rwf</Text>
                      
<View>
    <View>
<Entypo name="circle-with-minus" size={24} color="black" onPress={setQuantity(quantity-1)} />
</View>
<View>
<Text>{quantity}</Text>
</View>
<View>
<Entypo name="circle-with-plus" size={24} color="black" onPress={setQuantity(quantity+1)} />
</View>
</View>
                    </View>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        marginTop:100,
        marginLeft:30,
        flexDirection:'row'
    
    },
    image:{
        width:80,
        height:80,
        resizeMode:'cover',
        borderRadius:50,

    },
    name:{
        fontWeight:'800',
        fontSize:18,
    },
    ingredients:{
        textAlign:'center'
    },
    price:{
        marginTop:10,
        marginLeft:10,
        fontWeight:'600'
    
    },
    searchContainer:{
        marginTop:50,
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-evenly',
       alignItems:'center',
       
       },
       textinput:{
        borderWidth:1,
        borderColor:'#12bbc7',
        fontSize: 18,
         fontWeight: 'bold',
         borderRadius:50,
         width:300,
         textAlign:'center',
         height:50,
        },


})