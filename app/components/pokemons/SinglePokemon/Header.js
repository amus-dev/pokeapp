import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";

const Header = ({ namePokemon }) => {
  return (
    <View style={styles.header}>
      <SvgUri
        width={60}
        height={60}
        source={require("../../../assets/images/svg/arrow-left.svg")}
      />
      <Text>{namePokemon}</Text>
      <Text>Id</Text>
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
  },
});
