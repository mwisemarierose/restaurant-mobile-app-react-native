import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';

import SettingsScreen from './screens/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login';
import MenuScreen from './screens/Menu';
import image from "../assets/image.png"

//Screen names
const homeName = "Home";
const menuName = "Menu";
const settingsName = "Cart";
const loginName= "Login";


const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
function MainContainer() {
  return (<SafeAreaView style={{flex:1}}>
    {/* <Image source={image} style={styles.logo}/> */}
            
      <Tab.Navigator
        initialRouteName={loginName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
           
            let rn = route.name;
            

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === menuName) {
              iconName = focused ? 'restaurant' : 'restaurant-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (rn == loginName){
              iconName= focused ? 'log-in' : 'log-in';
            }

            // You can return any component that you like here!
             return <Ionicons Entypo name={iconName} size={size} color={color} />;
            

          },
        })}
        tabBarOptions={{
          activeTintColor: '#12bbc7',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70},
          position:'absolute',
          bottom:0,
          left:0
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} options={{
                  headerShown:false
                }}/>
        <Tab.Screen name={menuName} component={MenuScreen} options={{
                  headerShown:false
                }}/>
        {/* <Tab.Screen name={settingsName} component={SettingsScreen} options={{
                  headerShown:false
                }}/> */}
        <Tab.Screen name={loginName} component={LoginScreen}
                options={{
                  headerShown:false
                }}
        />
        
      </Tab.Navigator>
      
        
      </SafeAreaView>

   
  );
}
const styles=StyleSheet.create({
 
})
export default MainContainer;