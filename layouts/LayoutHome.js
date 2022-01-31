import React from "react";
import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
// Components
import Header from "../components/header/Header";
import CardPokemon from "../components/pokemons/CardPokemon";
import Paginate from "../components/paginate";
//Redux
import { useSelector } from "react-redux";
// Themes
import { BACKGROUND } from "../theme/colors";

const LayoutHome = () => {
  const { dataPokemons } = useSelector((state) => state.pokemonReducer);

  return (
    <SafeAreaView>
      <ScrollView style={styles.layout}>
        <Header />
        <View style={styles.containerCard}>
          {dataPokemons &&
            dataPokemons.map((pokemon, index) => (
              <CardPokemon namePokemon={pokemon.name} key={index} />
            ))}
        </View>
        <Paginate />
      </ScrollView>
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
