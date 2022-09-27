import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";

import React from "react";

const IntroScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const image = require("../assets/nutrition.jpg");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 1 }}
      >
        <View style={styles.block1}>
          <Text style={styles.header}>Bienvenido a Ultrafit</Text>
        </View>
        <View style={styles.block2}>
          <Text style={styles.description}>
            Encuentra recetas nutricionales que se ajusten a un plan dietetico
            diseñado especialmente para ti. Empieza hoy en UltraFit.
          </Text>
        </View>
        <View style={styles.block3}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.textStart}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.block4}>
          <Text style={styles.footer}>Design by: Andrés Felipe - Ultra </Text>
          <Text>2022</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  block2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  block3: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  block4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  header: {
    fontSize: 31,
    padding: 30,
    fontFamily: "BebasNeue",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    fontFamily: "BebasNeue",
    textAlign: "center",
    padding: 35,
  },

  startButton: {
    padding: 10,
  },
  textStart: {
    fontSize: 27,
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
});

export default IntroScreen;
