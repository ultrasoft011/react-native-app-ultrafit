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
import React from "react";
import StaterScreen from "./pages/StarterScreen";
import UltraFitNavigator from "./navigation/UltraFitNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UltraFitNavigator style={{ fontFamily: "Inter_900Black", fontSize: 80 }} />
  );
}
