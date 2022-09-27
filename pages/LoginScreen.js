import {
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import AntDesign from "react-native-vector-icons/AntDesign";
import ToggleCamera from "../components/ToggleCamera";
import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import { useFonts } from "expo-font";

const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const loginImagen = require("../assets/login-image.jpg");

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Account created!");
      })
      .catch((error) => {
        // console.log(error);
        Alert.alert(error.message);
      });
    return;
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("Home");
        console.log("Signed In");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  };

  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={loginImagen}
          style={styles.loginImagen}
          imageStyle={{ opacity: 0.1 }}
        >
          <View style={styles.block1}>
            <Text style={styles.block1Text}>ULTRAFIT</Text>
          </View>
        </ImageBackground>

        <View style={styles.block2}>
          <Text style={styles.block2Text}>LOGIN</Text>

          <View style={styles.inputMainblock}>
            <View>
              <View style={styles.block3}>
                <AntDesign
                  name="mail"
                  style={{ fontSize: 21, marginRight: 5 }}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setEmail(text)}
                  placeholder="username o email"
                  maxLength={30}
                />
              </View>

              <View style={styles.block3}>
                <AntDesign
                  name="lock"
                  style={{ fontSize: 21, marginRight: 5 }}
                />

                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setPassword(text)}
                  placeholder="password"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{ marginLeft: 70, position: "absolute", left: 200 }}
              onPress={handleSignIn}
            >
              <AntDesign
                name="rightcircle"
                style={{
                  fontSize: 48,
                  color: "#6a5acd",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: "8%", width: "50%" }}>
            <TouchableWithoutFeedback onPress={handleCreateAccount}>
              <Text style={styles.newAccount}>CREATE AN ACCOUNT</Text>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <ToggleCamera />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    backgroundColor: "#6a5acd",
    flex: 1,
  },
  block1: {
    flex: 1,
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  block2: {
    backgroundColor: "white",
    borderTopLeftRadius: 31,
    borderTopRightRadius: 31,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 50,
    height: "60%",
  },
  block3: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 19,
    height: "auto",
  },
  block1Text: {
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 45,
  },
  block2Text: {
    color: "#6a5acd",
    fontFamily: "BebasNeue",
    fontSize: 30,
    marginBottom: 25,
  },
  inputMainblock: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  newAccount: {
    backgroundColor: "#6a5acd",
    borderRadius: 5,
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 19,
    padding: 11,
  },
  loginImagen: {
    flex: 1,
  },
});
