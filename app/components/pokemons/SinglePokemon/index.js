import React, { useEffect } from "react";
import { View, Text } from "react-native";

import Header from "./Header";
import Content from "./Content";

const SinglePokemon = ({
  idPokemon,
  namePokemon,
  type,
  imagePoke,
  pokemonData,
}) => {
  return (
    <View>
      <Header
        idPokemon={idPokemon}
        namePokemon={namePokemon}
        type={type}
        pokemonData={pokemonData}
      />
      <Content imagePoke={imagePoke} type={type} />
    </View>
  );
};

export default SinglePokemon;
