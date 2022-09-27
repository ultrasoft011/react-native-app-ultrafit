import { Dimensions, FlatList, TouchableOpacity } from "react-native";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { addFood, changeStatus } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import AppLoading from "expo-app-loading";
import DATA from "../data/status";
import { StatusBar } from "expo-status-bar";
import nutritionItems from "../data/nutritionItems";
import { useEffect } from "react";
import { useState } from "react";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const firstImage = require("../assets/home-image.jpg");

const StaterScreen = ({ navigation }) => {
  const { statusSelection } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [statusSelected, setStatusSelected] = useState("01");
  const [buttonNext, setButtonNext] = useState(true);
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => <Item title={item.title} />;

  const Item = ({ title }) => (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  const onPress = () => {
    DATA.map((element) => {
      // console.log(element.id);
      if (element.id === "01") {
        console.log("01");
        return setStatusSelected("01");
      }
      if (element.id === "02") {
        return setStatusSelected("02");
      }
      if (element.id === "03") return setStatusSelected("03");
    });
    dispatch(changeStatus(statusSelected));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={firstImage}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={{ opacity: 0.55 }}
      >
        <View style={styles.block1}>
          <Text style={styles.header}>¿Cómo te sientes hoy?</Text>
        </View>
        <View style={styles.block2}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        <View style={styles.block3}>
          <View style={styles.emoticon}>
            {/* <Text>{statusSelected}</Text> */}
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              navigation.navigate("Nutrition");
            }}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  block1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  block2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  block3: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 180,
  },
  header: {
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 34,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 21,
    fontFamily: "BebasNeue",
    lineHeight: 50,
    textAlign: "center",
  },
  image: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  emoticon: {
    fontSize: 50,
    alignSelf: "center",
    marginBottom: 15,
  },
  nextButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#6B1CB0",
    fontSize: 17,

    width: "30%",
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 20,
  },
  footer: {
    color: "white",
    backgroundColor: "#6B1CB0",
    fontSize: 14,
    padding: 7,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    opacity: 0.75,
  },
});

export default StaterScreen;
