import { Account } from "../pages/Account";
import IntroScreen from "../pages/IntroScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Nutrition } from "../pages/Nutrition";
import React from "react";
import StaterScreen from "../pages/StarterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UltraFitNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={IntroScreen} />
      <Stack.Screen name="Starter" component={StaterScreen} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default UltraFitNavigator;
