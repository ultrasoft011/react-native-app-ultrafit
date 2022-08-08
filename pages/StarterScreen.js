import { Dimensions, FlatList, TouchableOpacity } from "react-native-web";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { useDispatch, useSelector } from "react-redux";

import AppLoading from "expo-app-loading";
import DATA from "../data/status";
import { StatusBar } from "expo-status-bar";
import { changeStatus } from "../features/cart/cartSlice";
import { useState } from "react";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const StaterScreen = (props) => {
  const { statusSelection } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [statusSelected, setStatusSelected] = useState("");
  const [buttonNext, setButtonNext] = useState("");
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  console.log(props);
  console.log(statusSelection);

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
        dispatch(changeStatus(element.id));
        setButtonNext(
          <TouchableOpacity style={styles.nextButton}>Next</TouchableOpacity>
        );
      }
    });
    console.log(DATA);
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
          {buttonNext}
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
    color: "white",
    fontWeight: "bold",
    width: "30%",
    paddingVertical: 8,
    paddingHorizontal: 40,
    opacity: 0.9,
    marginBottom: 40,
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
