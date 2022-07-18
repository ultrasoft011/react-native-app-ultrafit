import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import StaterScreen from "./StarterScreen";

const IntroScreen = (props) => {
  let [windowScreen, setWindow] = useState("");
  let [firstScreen, setFirstScreen] = useState("");

  const image = require("../assets/nutrition.jpg");

  const onStarted = (props) => {
    if (props === "1") {
      console.log("ejecutado", props);
      setWindow(<StaterScreen />);
    }
  };

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
            onPress={() => onStarted("1")}
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
    height: "100%",
    fontSize: 25,
    padding: 40,
  },
  text: {
    color: "black",
    fontSize: 17,
    lineHeight: 50,
    textAlign: "center",
  },
});

export default IntroScreen;
