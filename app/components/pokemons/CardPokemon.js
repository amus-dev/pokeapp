import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";

import { fetchPokemonByName } from "../../services/getPokemons";
import { COLOR_TYPES, WHITE } from "../../theme/colors";
import { fonts, fontSizes } from "../../theme/fonts";

const CardPokemon = ({ id, namePokemon }) => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      const pokemonData = await fetchPokemonByName(namePokemon);
      setPokemon(pokemonData);
    })();
  }, []);

  return (
    pokemon && (
      <View
        style={[
          styles.card,
          { borderColor: COLOR_TYPES[pokemon.types[0].type.name] },
        ]}
      >
        <Text
          style={[
            styles.id,
            { color: COLOR_TYPES[pokemon.types[0].type.name] },
          ]}
        >{`#${id + 1}`}</Text>
        <SvgUri
          width={60}
          height={60}
          uri={pokemon.sprites.other.dream_world.front_default}
          onPress={() =>
            navigation.navigate("PokemonScreen", {
              pokemonData: pokemon,
              namePokemon,
              type: pokemon.types[0].type.name,
            })
          }
        />
        <Text
          style={[
            styles.name,
            {
              backgroundColor: COLOR_TYPES[pokemon.types[0].type.name],
            },
          ]}
          onPress={() =>
            navigation.navigate("PokemonScreen", {
              pokemonData: pokemon,
              namePokemon,
              type: pokemon.types[0].type.name,
            })
          }
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
