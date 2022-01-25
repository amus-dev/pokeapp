import { View, Text } from "react-native";
import React from "react";
import LayoutPokemon from "../layouts/LayoutPokemon";

const PokemonScreen = ({ route }) => {
  const { idPokemon, namePokemon, type, imagePoke, pokemonData } = route.params;

  return (
    <LayoutPokemon
      idPokemon={idPokemon}
      namePokemon={namePokemon}
      type={type}
      imagePoke={imagePoke}
      pokemonData={pokemonData}
    />
  );
};

export default PokemonScreen;
