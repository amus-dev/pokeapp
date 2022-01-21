import React from "react";
import { SafeAreaView } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import LayoutHome from "./app/layouts/LayoutHome";

const App = () => {
  let [poppinsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView>
        <LayoutHome />
      </SafeAreaView>
    );
  }
};

export default App;
