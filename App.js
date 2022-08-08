import { Button, FlatList, TouchableOpacity } from "react-native-web";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";
import MainNavigator from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import TabNavigator from "./navigation/tab/TabNavigator";
import UltraFitNavigator from "./navigation/UltraFitNavigator";
import { store } from "./store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
