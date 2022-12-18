import React from "react";

import { Image,Text,View, StyleSheet, useWindowDimensions } from "react-native";
export default OnBoardingItem=({item})=>{
    const {width}= useWindowDimensions();
    return(
        
        <View style={[styles.container,{width}]}>
            <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>

               <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.descrption}>{item.descrption}</Text>



               </View>
        </View>
      
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        flex:0.7,
        justifyContent:'center',
    },
    title:{
        fontWeight:'800',
        fontSize:24,
        marginBottom:10,
        textAlign:'center',
       color:"#493d8a",

    },
    descrption:{
        fontWeight:'300',
        fontSize:18,
        marginBottom:10,
        textAlign:'center',
        paddingHorizontal:64,
        color:"#62656b",

    },
})