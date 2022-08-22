import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
