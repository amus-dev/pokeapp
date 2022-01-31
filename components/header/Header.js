import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgCssUri } from "react-native-svg";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import { fonts, fontSizes } from "../../theme/fonts";

const Header = () => {
  const pokeball = require("../../assets/images/svg/pokeball.svg");
  const pokeballSVG = resolveAssetSource(pokeball);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgCssUri width={24} height={32} uri={pokeballSVG.uri} />
        <Text style={styles.title}>Pokédex</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.title,
  },
});
