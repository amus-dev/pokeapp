import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoPokeball from "../../assets/images/svg/LogoPokeball";
import { fonts, fontSizes } from "../../theme/fonts";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoPokeball width={24} height={32} />
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
