import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import image from "../../assets/cheeseBugger.jpeg";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { changeQty,changeQuantity } from "./cartredux";

export default function SettingsScreen() {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(5000);
  const navigation = useNavigation();
  const[isLoading,setLoading]=useState(false)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 
  // const amount=calctotal(cart.cart)
const remove=()=>{
Alert.alert(
  "Warning",
  "you want to remove this product?",
  [
    {
      text: 'Ok',
      onPress: () =>{
       
    }
    },
    {
      text:'cancel',
      
    }
  ],
  { cancelable: true}
  )
}
const makeOrder= async () => {
  try{
    const order={
      username:"rose@gmail.com",
      email:"umuhoza@gmail.com",
      address:"kk93ST",
      product: cart.cart
    }
    console.log(order)
    // const headers={
    //   'Content-Type':'application/json',
    //   Accept:'application/json'
    // }
    const res = await axios.post(
      "https://restaurant-5egnyr4qi-mwiseneza.vercel.app/order/orders",order
    );
  }
  catch(e){
console.log(e)
  }
  
   }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Text
        style={{
          fontSize: 20,
          position: "absolute",
          right: 170,
          fontWeight: "800",
          marginTop: 30,
        }}
      >
        Your Cart
      </Text>

      <FlatList
        data={cart.cart}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <MaterialIcons
              name="cancel"
              size={24}
              color="red"
              onPress={() => remove()}
            />
            
            <View style={styles.image}>
              <Image source={{ uri: item.thumb }}  style={styles.image} />
            </View>
            <View>
              <Text style={styles.name}>---------{item.name}-------</Text>
              <Text style={styles.ingredients}>{item.desc}</Text>
              <Text style={styles.price}>
                UP:{item.cost} rwf Amount: {item.cost * item.quantity} rwf
              </Text>

              <View style={styles.quantity_container}>
                <Text>QTY:</Text>
                <View>
                  <Entypo name="circle-with-minus" size={24} color="#12bbc7"onPress={()=>{
                    item.quantity>0?dispatch(changeQuantity({item})):0;
                    // dispatch(changeQty({item,quantity:quantity}));
                    }} />
                </View>
                <View>
                  <Text>{item.quantity}</Text>
                </View> 
                <View>
                <Entypo name="circle-with-plus" size={24} color="#12bbc7"onPress={()=>{
                    item.quantity>0?dispatch(changeQty({item})):0;
                    // dispatch(changeQty({item,quantity:quantity}));
                    }} />
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.location}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            textAlign: "center",
            marginLeft: 30,
          }}
        >
          Your Location
        </Text>
        <View style={styles.location_container}>
          <Entypo
            name="location"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="Address" style={styles.location_text} />
        </View>
        <View style={styles.location_container}>
          <Entypo
            name="address"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="Street-number" style={styles.location_text} />
        </View>
        <View style={styles.location_container}>
          <Entypo
            name="home"
            size={30}
            color="#12bbc7"
            style={{ marginTop: 10 }}
          />
          <TextInput placeholder="House-number" style={styles.location_text} />
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':null}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('payment')}
      >
        <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center" }}>
          Confirm Order
        </Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
    marginLeft: 10,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  name: {
    fontWeight: "800",
    fontSize: 16,
  },
  ingredients: {
    textAlign: "center",
  },
  price: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "600",
  },
  searchContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#12bbc7",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 50,
    width: 300,
    textAlign: "center",
    height: 50,
  },
  quantity_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  location: {
    flex: 3,
    alignItems: "center",
  },
  location_container: {
    display: "flex",
    flexDirection: "row",
  },
  location_text: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#12bbc7",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 50,
    width: 300,
    textAlign: "center",
    height: 30,
    marginTop: 10,
  },
  button: {
    marginBottom: 40,
    width: 150,
    height: 30,
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: 140,
    borderColor: "#12bbc7",
    backgroundColor: "#12bbc7",
  },
});