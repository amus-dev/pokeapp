import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/header/Header";
import CardPokemon from "../components/pokemons/CardPokemon";
import { BACKGROUND } from "../theme/colors";
import { fetchPokemons } from "../services/getPokemons";

const LayoutHome = () => {
  const [dataPokemons, setDataPokemons] = useState(null);

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setDataPokemons(pokemons);
    })();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <Header setDataPokemons={setDataPokemons} />
        <View style={styles.containerCard}>
          {dataPokemons &&
            dataPokemons.map((pokemon, index) => (
              <CardPokemon namePokemon={pokemon.name} id={index} key={index} />
            ))}
        </View>

        <Text>paginador</Text>
      </View>
    </SafeAreaView>
  );
};

export default LayoutHome;

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 20,
    backgroundColor: BACKGROUND,
  },
  containerCard: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
