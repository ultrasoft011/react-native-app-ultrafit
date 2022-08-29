import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";

import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import React from "react";
// db
import { init } from "./db";
// store
import { store } from "./store";

init().then(() =>  console.log('Database initializaed')).catch((err) => {
  console.log('db failed conection');
} )

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
