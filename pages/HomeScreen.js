import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { useFonts } from "expo-font";

const spinach = require("../assets/spinach.jpg");
const egg = require("../assets/eggs.jpg");
const oatMeal = require("../assets/oatMeal.jpg");

export const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Abel: require("../assets/fonts/Abel-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.foodCard}>
            <Image source={spinach} style={styles.foodMainImage} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontFamily: "Abel", fontWeight: "bolder" }}>
              Espinaca
            </Text>
            <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
              Lorem ipsum dolor{"\n"}sit amet,consectetur.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={styles.foodCard}>
            <Image source={egg} style={styles.foodMainImage} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontFamily: "Abel", fontWeight: "bolder" }}>
              Huevo
            </Text>
            <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
              Lorem ipsum dolor{"\n"}sit amet,consectetur.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={styles.foodCard}>
            <Image source={oatMeal} style={styles.foodMainImage} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontFamily: "Abel", fontWeight: "bolder" }}>
              Avena
            </Text>
            <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
              Lorem ipsum dolor{"\n"}sit amet,consectetur.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 15,
    flex: 1,
  },
  foodCard: {
    marginLeft: 15,
  },
  foodMainImage: {
    width: 110,
    height: 55,
  },
});
