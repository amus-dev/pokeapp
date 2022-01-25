import { View, Text } from "react-native";
import React from "react";
import LayoutPokemon from "../layouts/LayoutPokemon";

const PokemonScreen = ({ route }) => {
  const { pokemonData, namePokemon, type } = route.params;

  return (
    <LayoutPokemon
      pokemonData={pokemonData}
      namePokemon={namePokemon}
      type={type}
    />
  );
};

export default PokemonScreen;
