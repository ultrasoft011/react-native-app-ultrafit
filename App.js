import { Button, FlatList, TouchableOpacity } from "react-native-web";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DATA from "./data/status";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const firstImage = require("../ultrafit-ballesteros/assets/home-image.jpg");
  const [statusSelected, setStatusSelected] = useState("");
  const [buttonNext, setButtonNext] = useState("");

  const Item = ({ title }) => (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  const onPress = (e) => {
    console.log(e.target.innerText);
    DATA.map((element) => {
      if (e.target.innerText === element.title) {
        setStatusSelected(element.emoticon);
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
        style={styles.image}
        imageStyle={{ opacity: 0.55 }}
      >
        <View>
          <Text style={styles.header}>¿Cómo te sientes hoy?</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          ></FlatList>
          <Text style={styles.emoticon}>{statusSelected}</Text>
          {buttonNext}
        </View>

        <View>
          <Text style={styles.footer}>UltraFit</Text>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 80,
  },
  text: {
    color: "white",
    fontSize: 17,
    lineHeight: 50,
    textAlign: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  emoticon: {
    fontSize: 50,
    alignSelf: "center",
    paddingTop: 25,
    paddingBottom: 30,
  },
  nextButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#6B1CB0",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    width: "30%",
    padding: 8,
    opacity: 0.9,
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
  },
});
