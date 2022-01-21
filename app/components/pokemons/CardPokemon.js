import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { BASE_URL } from "../../utils/api";
import { COLOR_TYPES, WHITE } from "../../theme/colors";
import { fonts, fontSizes } from "../../theme/fonts";

const CardPokemon = ({ id, namePokemon }) => {
  const idPokemon = id + 1;
  const [pokemon, setPokemon] = useState(null);
  const [typePokemon, setTypePokemon] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/pokemon/${namePokemon}`)
      .then((data) => data.json())
      .then((data) => setPokemon(data));

    fetch(`${BASE_URL}/type/${idPokemon}`)
      .then((data) => data.json())
      .then((data) => setTypePokemon(data.name));
  }, []);

  return (
    pokemon && (
      <View style={[styles.card, { borderColor: COLOR_TYPES[typePokemon] }]}>
        <Text
          style={[styles.id, { color: COLOR_TYPES[typePokemon] }]}
        >{`#${id}`}</Text>
        <SvgUri
          width={60}
          height={60}
          uri={pokemon.sprites.other.dream_world.front_default}
        />
        <Text
          style={[
            styles.name,
            {
              backgroundColor: COLOR_TYPES[typePokemon],
            },
          ]}
        >
          {namePokemon}
        </Text>
      </View>
    )
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "32%",
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  id: {
    marginLeft: "auto",
    marginBottom: 10,
    fontFamily: fonts.regular,
    fontSize: fontSizes.regularSmall,
    padding: 3,
  },
  name: {
    padding: 5,
    color: WHITE,
    width: "100%",
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: fontSizes.regularSmall,
  },
});
