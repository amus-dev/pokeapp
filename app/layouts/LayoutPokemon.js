import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import SinglePokemon from "../components/pokemons/SinglePokemon";

import { COLOR_TYPES } from "../theme/colors";

const LayoutPokemon = ({ pokemonData, namePokemon, type }) => {
  return (
    <SafeAreaView>
      <View style={[styles.layout, { backgroundColor: COLOR_TYPES[type] }]}>
        <SinglePokemon pokemonData={pokemonData} namePokemon={namePokemon} />
      </View>
    </SafeAreaView>
  );
};

export default LayoutPokemon;

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    height: "100%",
    width: "100%",
    padding: 5,
  },
});
