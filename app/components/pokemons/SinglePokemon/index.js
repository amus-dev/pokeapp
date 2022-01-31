import React from "react";
import { View } from "react-native";

import Header from "./Header";
import Content from "./Content";

const SinglePokemon = ({
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
    <View>
      <Header idPokemon={idPokemon} namePokemon={namePokemon} type={type} />
      <Content
        imagePoke={imagePoke}
        type={type}
        height={height}
        weight={weight}
        move={move}
        stats={stats}
      />
    </View>
  );
};

export default SinglePokemon;
