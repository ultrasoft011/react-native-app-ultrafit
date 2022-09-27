import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BoostersCard from "../../components/BoostersCard";
import { FoodDetails } from "../../pages/FoodDetails";
import { HomeScreen } from "../../pages/HomeScreen";
import IntroScreen from "../../pages/IntroScreen";
import LoginScreen from "../../pages/LoginScreen";
import { Nutrition } from "../../pages/Nutrition";
import { Profile } from "../../pages/Profile";
import React from "react";
import StaterScreen from "../../pages/StarterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    initialRouteName="Intro"
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false,
    }}
  >
    {/* <BottomTabs.Screen
      name="Starter"
      component={IntroScreen}
      options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }}
    /> */}
        <BottomTabs.Screen
      name="Intro"
      component={IntroScreen}
      options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }}
    />
    <BottomTabs.Screen
      name="Login"
      component={LoginScreen}
      options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }}
    />
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{ alignItems: "center", justifyContent: "center", top: 7 }}
          >
            <Image
              source={require("../../assets/homa.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#4b0082" : "#748c94",
              }}
            />
          </View>
        ),
      }}
    />
    <BottomTabs.Screen
      name="Profile"
      component={Profile}
      options={{ tabBarButton: () => null }}
    />
    <BottomTabs.Screen
      name="Starter"
      component={StaterScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{ alignItems: "center", justifyContent: "center", top: 7 }}
          >
            <Image
              source={require("../../assets/booster.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#4b0082" : "#748c94",
              }}
            />
          </View>
        ),
      }}
    />
    <BottomTabs.Screen
      name="Nutrition"
      component={Nutrition}
      options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }}
    />
  </BottomTabs.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 15,
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 0,
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 15,
    height: 50,
    paddingBottom: 10,
    fontSize: 20,
  },
});

export default TabNavigator;
