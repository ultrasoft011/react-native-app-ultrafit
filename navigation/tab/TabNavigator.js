import IntroScreen from "../../pages/IntroScreen";
import { Nutrition } from "../../pages/Nutrition";
import React from "react";
import StaterScreen from "../../pages/StarterScreen";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
  >
    <BottomTabs.Screen
      name="Intro"
      component={IntroScreen}
      options={{ tabBarStyle: { display: "none" } }}
    />
    <BottomTabs.Screen name="Starter" component={StaterScreen} />
    <BottomTabs.Screen name="Nutrition" component={Nutrition} />
  </BottomTabs.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    height: 50,
    paddingBottom: 10,
    fontSize: 20,
  },
});

export default TabNavigator;
