import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Header from "./Header";

const SinglePokemon = ({ pokemonData, namePokemon }) => {
  return (
    <View>
      <Header pokemonData={pokemonData} namePokemon={namePokemon} />
    </View>
  );
};

export default SinglePokemon;
