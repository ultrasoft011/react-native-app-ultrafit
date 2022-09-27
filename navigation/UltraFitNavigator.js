import { HomeScreen } from "../pages/HomeScreen";
import IntroScreen from "../pages/IntroScreen";
import LoginScreen from "../pages/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Nutrition } from "../pages/Nutrition";
import { Profile } from "../pages/Profile";
import React from "react";
import StaterScreen from "../pages/StarterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UltraFitNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Starter" component={StaterScreen} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default UltraFitNavigator;
