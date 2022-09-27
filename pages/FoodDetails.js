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

import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import { useFonts } from "expo-font";

const batidoBlueberry = require("../assets/batidoBlueberry.jpg");
const batidoBackground = require("../assets/batidoBackground.jpg");

export const FoodDetails = () => {
  let [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Abel: require("../assets/fonts/Abel-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={batidoBackground}
        style={styles.imageBackground}
        imageStyle={{ opacity: 0.45 }}
        blurRadius={5}
      >
        <View>
          <AntDesign
            name="leftcircle"
            style={{
              color: "#ffff",
              fontSize: 21,
              marginTop: 19,
              marginLeft: "10%",
            }}
          />
          <View style={{ alignItems: "center", marginTop: 25 }}>
            <Image source={batidoBlueberry} style={styles.mainImage}></Image>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 35,
                marginBottom: 4,
                marginLeft: 25,
                marginRight: 25,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontFamily: "Abel",
                  fontWeight: "bold",
                }}
              >
                Batido de arandanos
              </Text>
              <Text style={{ color: "#fff", fontSize: 17, fontFamily: "Abel" }}>
                $15.400
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 11,
                  fontFamily: "Abel",
                  marginLeft: 25,
                }}
              >
                💥 250 kcal
              </Text>
            </View>
            <View style={{ marginTop: 30, marginLeft: 25, marginRight: 25 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontFamily: "Abel",
                  fontWeight: "bold",
                  marginBottom: 15,
                }}
              >
                Details
              </Text>
              <Text style={{ color: "#fff", fontFamily: "Abel" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel est vitae arcu euismod lobortis. Donec bibendum ultrices
                aliquet. Donec iaculis bibendum tellus.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000080",
    fontFamily: "Abel",
    flex: 1,
    marginTop: 19,
  },
  mainImage: {
    width: 170,
    height: 170,
    borderRadius: 20,
  },
  imageBackground: {
    flex: 1,
  },
});
