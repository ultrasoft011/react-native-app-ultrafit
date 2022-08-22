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

import BoostersCard from "../components/BoostersCard";
import HyperBooster from "../components/HyperBooster";
import ProteinsCard from "../components/ProteinsCard";
import React from "react";

export const Nutrition = () => {
  const { statusSelection } = useSelector((state) => state.cart);
  // const statusSelection = "03";
  console.log("The status selection", statusSelection);

  function RenderData(props) {
    console.log(props.selectionID);
    if (props.selectionID === "01") {
      return <ProteinsCard />;
    }
    if (props.selectionID === "02") {
      return <BoostersCard />;
    }
    if (props.selectionID === "03") {
      return <HyperBooster />;
    }
  }

  return (
    <SafeAreaView>
      <RenderData selectionID={statusSelection} />
    </SafeAreaView>
  );
};
