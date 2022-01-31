import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgCssUri } from "react-native-svg";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

//Themes
import { WHITE } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const Header = ({ idPokemon, namePokemon, type, pokemonData }) => {
  const navigation = useNavigation();
  const arrowLeft = require("../../../assets/images/svg/arrow-left.svg");
  const arrowLeftSVG = resolveAssetSource(arrowLeft);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <SvgCssUri width={30} height={30} uri={arrowLeftSVG.uri} />
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
