import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native-web";

import AntDesign from "react-native-vector-icons/AntDesign";
import ToggleCamera from "../components/ToggleCamera";

export const Account = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  return (
    <View style={styles.mainBlock}>
      <View style={styles.block1}>
        <Text style={styles.block1Text}>ULTRAFIT</Text>
        <ToggleCamera />
      </View>
      <View style={styles.block2}>
        <Text style={styles.block2Text}>LOGIN</Text>
        <View style={styles.inputMainblock}>
          <View>
            <View style={styles.block3}>
              <Text>
                <AntDesign
                  name="mail"
                  style={{ fontSize: 21, marginRight: 5 }}
                />
              </Text>

              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                value={number}
                placeholder="username o email"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.block3}>
              <Text>
                <AntDesign
                  name="lock"
                  style={{ fontSize: 21, marginRight: 5 }}
                />
              </Text>

              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                value={number}
                placeholder="password"
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity>
            <Text>
              <AntDesign
                name="rightcircle"
                style={{ fontSize: 48, marginLeft: 30, color: "#9966ff" }}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    backgroundColor: "#9966ff",
    height: "100%",
  },
  block1: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  block2: {
    backgroundColor: "white",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    height: "50%",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 50,
  },
  block3: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 19,
  },
  block1Text: {
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 45,
    fontStyle: "italic",
    marginTop: 30,
  },
  block2Text: {
    color: "#9966ff",
    fontFamily: "BebasNeue",
    fontSize: 30,
    marginBottom: 25,
  },
  inputMainblock: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
  },
});
