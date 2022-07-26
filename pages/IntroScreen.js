import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import React, { useState } from "react";

import AppLoading from "expo-app-loading";

const IntroScreen = ({ navigation }) => {
  let [windowScreen, setWindow] = useState("");
  let [firstScreen, setFirstScreen] = useState("");
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const image = require("../assets/nutrition.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.header}>
            Welcome to Ultrafit, press next to get the information!
          </Text>
          <TouchableOpacity
            style={styles.header}
            onPress={() => {
              navigation.navigate("Starter");
            }}
          >
            <Text style={styles.text}>TAP TO START</Text>
          </TouchableOpacity>
        </View>
        {windowScreen}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
  },
  header: {
    flex: 1,
    height: "70%",
    fontSize: 25,
    padding: 30,
    fontFamily: "BebasNeue",
    textAlign: "center",
  },
  text: {
    fontSize: 27,
    lineHeight: 10,
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
});

export default IntroScreen;
