import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import React from "react";
import SinglePokemon from "../components/pokemons/SinglePokemon";
import { COLOR_TYPES } from "../theme/colors";

const LayoutPokemon = ({
  idPokemon,
  namePokemon,
  type,
  imagePoke,
  height,
  weight,
  move,
  stats,
}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.layout, { backgroundColor: COLOR_TYPES[type] }]}>
          <ImageBackground
            source={require("../assets/images/png/bg-pokeball.png")}
            resizeMode="contain"
            style={styles.imageBackground}
          />
          <SinglePokemon
            idPokemon={idPokemon}
            namePokemon={namePokemon}
            type={type}
            imagePoke={imagePoke}
            height={height}
            weight={weight}
            move={move}
            stats={stats}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LayoutPokemon;

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    height: "100%",
    width: "100%",
    padding: 10,
  },
  imageBackground: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 200,
    height: 200,
  },
});
