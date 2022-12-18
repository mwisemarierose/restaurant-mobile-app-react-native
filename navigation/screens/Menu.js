import * as React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import image from "../../assets/cheeseBugger.jpeg";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { addfood } from "./cartredux";
import { useDispatch } from "react-redux";
import COLORS from "../../assets/colors";
const {width,height}=Dimensions.get("window")
import { ActivityIndicator } from "react-native";

export default function MenuScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState('');
  const [isLoading,setLoading]=React.useState(true)
  const [filteredmenus, setFilteredmenus] = React.useState([]);
  const [menu, setMenu] = React.useState([]);
  const dispatch = useDispatch();

  const getMenu = async () => {
    try {
      const res = await axios.get(
        "https://restaurant-d0t69ard0-mwiseneza.vercel.app/item/getAll"
       
      );
      setFilteredmenus(res.data)
      setMenu(res.data);
      setLoading(false)
      console.log(res.data)
    } catch (error) {
      console.log({ error: error });
    }
  };
  React.useEffect(() => {
    getMenu();
  }, []);

  
  const addTocart = (item) => {
    dispatch(addfood(item));
 //   navigation.navigate("Cart");
    // console.log(menu)
  };

  const searchFilter = (text) => {
    if (text) {
      const newMenu = menu.filter(function (item) {
        const menuData = item.name
        const textData = text;
        return menuData.indexOf(textData) > -1;
      });
      setFilteredmenus(newMenu);
      setSearch(text);
    } else {
      setFilteredmenus(menu);
      setSearch(text);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {isLoading?
            <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Welcome to FineFood...</Text></View>:(
                <View>
      <Text
        style={{
          fontSize: 20,
          position: "absolute",
          right: 170,
          fontWeight: "800",
          marginTop: 30,
          zIndex:1,
        }}
      >
        Menu
      </Text>
      <View  style={styles.search}>
       <View style={styles.sinput}>
      <View style={styles.sicon}>
      <EvilIcons name="search" size={29} color="black" />
      </View>
      <View style={{flex:8}}>
          <TextInput 
           onChangeText={(text) => searchFilter(text)}
          onBlur={(text) => searchFilter('')}
          onCancel={(text) => searchFilter('')}
          placeholder="Search for meal choice..."
          value={search}
          style={styles.input_search}
          />
          </View>
          </View>

        </View>
      <FlatList
        data={[...filteredmenus]}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) => (
          <View style={styles.container} key={item._id}>
            <View style={styles.image}>
              <Image source={{ uri: item.thumb }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.name}>-----{item.name}------</Text>
              <Text style={styles.ingredients}>{item.desc}</Text>
              <Text style={styles.price}>{item.cost} rwf</Text>
              <TouchableOpacity onPress={()=>addTocart(item)}>
                <Ionicons name="add-circle-outline" size={34} color="#12bbc7" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      </View>
            )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    marginLeft: 10,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 50,
  },
  name: {
    fontWeight: "800",
    fontSize: 18,
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
    marginTop: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  search:{
    padding:5,
    backgroundColor:COLORS.white,
    marginBottom:40,
    height:55,
    marginLeft:-5,
},


  sinput:{
    flexDirection:'row',
    width:"100%",
    marginTop:60,
    flex:1
  },
  sicon:{
    height:45,
    padding:10,
    marginLeft:10,
    backgroundColor:'rgb(228, 228, 228)',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },

input_search:{
 marginBottom:1,
 alignItems: 'center',
 justifyContent: 'center',
 height:45,
 fontSize:16,
  fontWeight:'bold',
  backgroundColor:'rgb(228, 228, 228)',
   borderTopRightRadius:10,
  borderBottomRightRadius:10
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

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height-60,
    backgroundColor:COLORS.bg,
    marginHorizontal:-10
 },


  indicator: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12
  },
});
