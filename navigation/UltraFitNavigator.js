import IntroScreen from "../pages/IntroScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StaterScreen from "../pages/StarterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UltraFitNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={IntroScreen} />
      <Stack.Screen name="Starter" component={StaterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default UltraFitNavigator;
