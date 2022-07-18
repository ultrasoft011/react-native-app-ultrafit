import { Button, FlatList, TouchableOpacity } from "react-native-web";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import IntroScreen from "./pages/IntroScreen";
import StaterScreen from "./pages/StarterScreen";

export default function App() {
  return (
    <SafeAreaView>
      <IntroScreen />
    </SafeAreaView>
  );
}
