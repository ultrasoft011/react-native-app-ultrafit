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

import React from "react";
import { useFonts } from "expo-font";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const homeBackgroundImage = require("../assets/homeBackground.jpg");
const spinach = require("../assets/spinach.jpg");
const egg = require("../assets/eggs.jpg");
const oatMeal = require("../assets/oatMeal.jpg");
const profileImageMan = require("../assets/profile-man.jpg");
const recetaPollo = require("../assets/receta-pollo.jpg");
const recetaSalmon = require("../assets/receta-salmon.jpg");
const recetaHuevos = require("../assets/receta-huevos.jpg");

export const HomeScreen = ({ navigation }) => {
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
        source={homeBackgroundImage}
        style={styles.imageHome}
        imageStyle={{ opacity: 0.2 }}
        blurRadius={5}
      >
        <View style={styles.header}>
          <Text style={{ color: "white", fontFamily: "Abel", marginRight: 45 }}>
            Welcome Name!
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={profileImageMan}
                style={styles.profileImage}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Abel",
              fontWeight: "bolder",
              marginLeft: 15,
              marginBottom: 9,
            }}
          >
            Recomendos masa muscular
          </Text>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={spinach} style={styles.foodMainImage} />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Espinaca
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={egg} style={styles.foodMainImage} />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Huevos
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={oatMeal} style={styles.foodMainImage} />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Avena
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 30 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Abel",
              fontWeight: "bolder",
              marginLeft: 15,
              marginBottom: 9,
            }}
          >
            Top Comidas masa muscular
          </Text>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={recetaSalmon} style={styles.foodMainImage} />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Bowl de aguacate y salmon
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={recetaHuevos} style={styles.foodMainImage} />
              </View>
              <View style={{ backgroundColor: "white", marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Tortilla de huevo
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 7,
              margin: 11,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.foodCard}>
                <Image source={recetaPollo} style={styles.foodMainImage} />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "Abel",
                    fontWeight: "bolder",
                  }}
                >
                  Pollo con salsa de mango
                </Text>
                <Text style={{ color: "#a9a9a9", fontFamily: "Abel" }}>
                  Lorem ipsum dolor{"\n"}sit amet,consectetur.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  imageHome: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: "#4b0082",
  },
  profileImage: {
    width: 40,
    height: 40,
    marginLeft: 45,
    borderRadius: 16,
  },
  foodCard: {
    marginLeft: 15,
  },
  foodMainImage: {
    width: 110,
    height: 55,
    borderRadius: 7,
  },
});
