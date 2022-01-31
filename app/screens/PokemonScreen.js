import { View, Text } from "react-native";
import React from "react";
import LayoutPokemon from "../layouts/LayoutPokemon";

const PokemonScreen = ({ route }) => {
  const {
    idPokemon,
    namePokemon,
    type,
    imagePoke,
    height,
    weight,
    move,
    stats,
  } = route.params;

  return (
    <LayoutPokemon
      idPokemon={idPokemon}
      namePokemon={namePokemon}
      type={type}
      imagePoke={imagePoke}
      height={height}
      weight={weight}
      move={move}
      stats={stats}
    />
  );
};

export default PokemonScreen;
