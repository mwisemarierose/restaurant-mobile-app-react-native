import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import ForgetScreen from "./navigation/screens/forget";
import ResetScreen from "./navigation/screens/reset";
import SignUpScreen from "./navigation/screens/signup";
import D from "./d";
import DrawerContainerScreen from "./navigation/drawerContainer";
import Payment from "./components/dashboard/payment";
import Dashboard from "./components/dashboard/dashboard";
import { Provider } from "react-redux";
import store from "./navigation/screens/store";


function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store = {store}>
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainContainer"
          component={MainContainer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={SignUpScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="forget"
          component={ForgetScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="reset"
          component={ResetScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="payments"
          component={Payment}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="dashboard"
          component={Dashboard}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="payment"
          component={Payment}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  
    </Provider>
    );
}

export default App;
