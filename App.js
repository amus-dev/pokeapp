import React from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

//Screens
import HomeScreen from "./screens/HomeScreen";
import PokemonScreen from "./screens/PokemonScreen";

const App = () => {
  const Stack = createStackNavigator();
  let [poppinsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
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
      </Provider>
    );
  }
};

export default App;
