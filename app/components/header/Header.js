import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import TextInputCustom from "../common/TextInputCustom";
import { fonts, fontSizes } from "../../theme/fonts";

const Header = ({ setDataPokemons }) => {
  const onSubmit = (text) => {
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgUri
          width={24}
          height={32}
          svgXmlData={"../../assets/images/svg/pokeball.svg"}
        />
        <Text style={styles.title}>Pokédex</Text>
      </View>
      <TextInputCustom placeholder="Buscar" onSubmit={onSubmit} />
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
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.title,
  },
});
