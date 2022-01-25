import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

//Screens
import HomeScreen from "./app/screens/HomeScreen";
import PokemonScreen from "./app/screens/PokemonScreen";

const App = () => {
  const Stack = createStackNavigator();
  let [poppinsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer theme={DarkTheme}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PokemonScreen"
              component={PokemonScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
};

export default App;
