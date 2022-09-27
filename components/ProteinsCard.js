import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const brownRice = require("../assets/brown-rice.jpg");
const avocado = require("../assets/avocado.jpg");
const eggs = require("../assets/eggs.jpg");

const ProteinsCard = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.foodCard}>
      <Image source={brownRice} style={styles.foodImage} />
      <Text style={styles.foodTitle}>BROWN RICE</Text>
      <Text style={styles.foodDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel est
        vitae arcu euismod lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec vel est vitae arcu euismod lobortis.
      </Text>
      <TouchableOpacity>
        <Text style={styles.detailsButton}>Details</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.foodCard}>
      <Image source={avocado} style={styles.foodImage} />
      <Text style={styles.foodTitle}>AVOCADO</Text>
      <Text style={styles.foodDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel est
        vitae arcu euismod lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec vel est vitae arcu euismod lobortis.
      </Text>
      <TouchableOpacity>
        <Text style={styles.detailsButton}>Details</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.foodCard}>
      <Image source={eggs} style={styles.foodImage} />
      <Text style={styles.foodTitle}>EGGS</Text>
      <Text style={styles.foodDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel est
        vitae arcu euismod lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec vel est vitae arcu euismod lobortis.
      </Text>
      <TouchableOpacity>
        <Text style={styles.detailsButton}>Details</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  foodCard: {
    backgroundColor: "#7C21BF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 50,
    marginBottom: 30,
    marginLeft: 50,
    borderColor: "#480087",
    borderWidth: 1,
    /* textShadowColor:'#585858',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:10, */
  },
  scrollView: {
    backgroundColor: "#F7EDFF",
  },
  foodImage: {
    maxWidth: 250,
    width: 250,
    height: 120,
  },
  foodTitle: {
    color: "white",
    fontFamily: "Inter_900Black",
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 21,
  },
  foodDescription: {
    color: "white",
    fontFamily: "BebasNeue",
    fontSize: 14,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 20,
    textAlign: "center",
  },
  detailsButton: {
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    marginBottom: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default ProteinsCard;
