import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowPrev from "../../../assets/images/svg/ArrowPrev";

//Themes
import { WHITE } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const Header = ({ idPokemon, namePokemon, type, pokemonData }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <ArrowPrev width={30} height={30} fill="white" />
      </TouchableOpacity>

      <Text style={styles.name}>{namePokemon}</Text>
      <Text style={styles.id}>{`#${idPokemon}`}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.title,
    textTransform: "capitalize",
    color: WHITE,
  },
  id: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.regular,
    color: WHITE,
  },
});
