import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet } from 'react-native';
import image from '../../assets/profile.jpg'

// Screens
import Payment from './payment';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './profile';
import HomeScreen from '../../navigation/screens/HomeScreen';
import MenuScreen from '../../navigation/screens/Menu';
import SettingsScreen from '../../navigation/screens/SettingsScreen';
//Screen names
const homeName = "Home";
const menuName = "Menu";
const cartName = "Cart";
const paymentName= "Payment";
const settingName= "Settings";



const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
function Dashboard() {
  return (<>
    <Image source={image} style={styles.logo2}/>
            
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
           
            let rn = route.name;
            

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === menuName) {
              iconName = focused ? 'restaurant' : 'restaurant-outline';

            } else if (rn === cartName) {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (rn == paymentName){
              iconName= focused ? 'wallet' : 'wallet-outline';
            }
            else if (rn == settingName){
                iconName= focused ? 'settings' : 'settings-outline';
              }
            // You can return any component that you like here!
             return <Ionicons Entypo name={iconName} size={size} color={color} />;
            

          },
        })}
        tabBarOptions={{
          activeTintColor: '#12bbc7',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{
                  headerShown:false
                }}/>
        <Tab.Screen name={menuName} component={MenuScreen} options={{
                  headerShown:false
                }}/>
        <Tab.Screen name={cartName} component={SettingsScreen} options={{
                  headerShown:false
                }}/>
        {/* <Tab.Screen name={paymentName} component={Payment}
                options={{
                  headerShown:false
                }}
        /> */}
        <Tab.Screen name={settingName} component={Profile}
                options={{
                  headerShown:false
                }}
        />
        
      </Tab.Navigator>
      
        
      </>

   
  );
}
const styles=StyleSheet.create({
  logo:{
    width:100,
    height:100,
    position:'absolute',
    marginTop:15,
    marginLeft:10,
    zIndex:1,
},
logo2:{
  width:30,
  height:30,
  position:'absolute',
 right:10,
  zIndex:1,
  borderRadius:50,
  top:40,
  borderColor:'#12bbc7',
  borderWidth:2,
}
})
export default Dashboard;