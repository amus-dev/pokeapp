import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";

// Services or Themes
import { fetchPokemonByName } from "../../services/getPokemons";
import { COLOR_TYPES, WHITE } from "../../theme/colors";
import { fonts, fontSizes } from "../../theme/fonts";

const CardPokemon = ({ namePokemon }) => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const promisePokemon = Promise.resolve(fetchPokemonByName(namePokemon));
    promisePokemon.then((pokemon) => setPokemon(pokemon));
  }, [namePokemon]);

  return (
    pokemon && (
      <TouchableOpacity
        style={[
          styles.card,
          { borderColor: COLOR_TYPES[pokemon.types[0].type.name] },
        ]}
        onPress={() =>
          navigation.navigate("PokemonScreen", {
            idPokemon: pokemon.id,
            namePokemon,
            imagePoke: pokemon.sprites.other.dream_world.front_default,
            type: pokemon.types[0].type.name,
            height: pokemon.height,
            weight: pokemon.weight,
            move: pokemon.moves[0].move.name,
            stats: pokemon.stats,
          })
        }
      >
        <Text
          style={[
            styles.id,
            { color: COLOR_TYPES[pokemon.types[0].type.name] },
          ]}
        >{`#${pokemon.id}`}</Text>
        <SvgUri
          width={60}
          height={60}
          uri={pokemon.sprites.other.dream_world.front_default}
        />
        <Text
          style={[
            styles.name,
            {
              backgroundColor: COLOR_TYPES[pokemon.types[0].type.name],
            },
          ]}
        >
          {namePokemon}
        </Text>
      </TouchableOpacity>
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
