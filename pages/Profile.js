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

import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import { useFonts } from "expo-font";

export const Profile = () => {
  let [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Abel: require("../assets/fonts/Abel-Regular.ttf"),
  });
  const profileImage = require("../assets/profile-img.jpg");
  const image = require("../assets/nutrition.jpg");

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 0.85 }}
      >
        <View style={styles.header}>
          <AntDesign
            name="leftcircle"
            style={{ fontSize: 21, marginLeft: "10%" }}
          />
          <Text
            style={{
              fontFamily: "Abel",
              fontSize: 17,
              marginLeft: "30%",
            }}
          >
            Profile
          </Text>
        </View>
        <View style={styles.blockOne}>
          <View style={styles.profileImage}>
            <Image source={profileImage} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Abel",
                fontSize: 19,
                marginTop: 11,
                fontWeight: "bolder",
              }}
            >
              Profile Name
            </Text>
          </View>
        </View>
        <View style={styles.blockTwo}>
          <Text
            style={{
              borderRightWidth: 2,
              paddingRight: 35,
              fontFamily: "Abel",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bolder" }}>70 </Text>kg
            {"\n"}Weight
          </Text>
          <Text
            style={{
              borderRightWidth: 2,
              paddingRight: 35,
              fontFamily: "Abel",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bolder" }}>170 </Text>cm
            {"\n"}Height
          </Text>
          <Text style={styles.textBlockTwo}>
            <Text style={{ fontSize: 20, fontWeight: "bolder" }}>31 </Text>
            {"\n"}Age
          </Text>
        </View>
        <View style={{ marginTop: 60, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Abel",
              fontSize: 19,
              fontWeight: "bolder",
            }}
          >
            Nutrition Plan
          </Text>
        </View>
        <View style={styles.nutritionBlock}>
          <View style={styles.nutritionLeftBlock}>
            <Text style={styles.nutritionText}> 🍚 Carbs: 110 gr</Text>
            <Text style={styles.nutritionText}> 🥩 Proteins: 120 gr </Text>
          </View>
          <View style={styles.nutritionRightBlock}>
            <Text style={styles.nutritionText}> 🥑 Lipids: 50 gr </Text>
            <Text style={styles.nutritionText}>Calories: 2000 kcal</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
  },
  main: {
    // backgroundColor: "hsla(274, 100%, 35%, 0.5)",
    backgroundColor: "#6a5acd",
    fontFamily: "Abel",
    flex: 1,
  },
  profileImage: {
    borderRadius: "50%",
    width: 100,
    height: 100,
  },
  blockOne: {
    alignItems: "center",
    marginTop: "10%",
  },
  blockTwo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginLeft: 21,
    marginRight: 21,
  },
  textBlockTwo: {
    fontFamily: "Abel",
  },
  nutritionBlock: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
  },
  nutritionLeftBlock: {},
  nutritionText: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
});
