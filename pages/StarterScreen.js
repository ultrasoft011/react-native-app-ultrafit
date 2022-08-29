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
import { insertFood } from "../db";
import nutritionItems from "../data/nutritionItems";
import { useState } from "react";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const StaterScreen = ({ navigation }) => {
  const { statusSelection } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [statusSelected, setStatusSelected] = useState("");
  const [buttonNext, setButtonNext] = useState(true);
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Item = ({ title }) => (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  const firstImage = require("../assets/home-image.jpg");

  const renderItem = ({ item }) => <Item title={item.title} />;

  const onPress = (e) => {
    console.log(e.target.innerText);
    DATA.map((element) => {
      if (e.target.innerText === element.title) {
        setStatusSelected(element.emoticon);
        setButtonNext(false);
        dispatch(changeStatus(element.id));
        dispatch(
          addFood({
            id: "1",
            title: "Juntas",
            price: "99.99",
            img: "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
            amount: 0,
          })
        );
      }
    });
    console.log(nutritionItems);
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
          <Text style={styles.emoticon}>{statusSelected}</Text>
          {/* <TouchableOpacity
            disabled={buttonNext}
            style={styles.nextButton}
            onPress={() => {
              navigation.navigate("Nutrition");
            }}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity> */}
        </View>
        <StatusBar style="auto" />
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
