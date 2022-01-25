import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";
// Components
import About from "./About";
import Stats from "./Stats";
// Themes
import { COLOR_TYPES, WHITE } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const Content = ({ imagePoke, type }) => {
  return (
    <View style={styles.content}>
      <SvgUri width={180} height={180} uri={imagePoke} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={[styles.type, { backgroundColor: COLOR_TYPES[type] }]}>
          {type}
        </Text>
        <About type={type} />
        <Stats type={type} />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    zIndex: 1,
  },
  descriptionContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: 8,
    width: "100%",
    top: -50,
    paddingTop: 70,
    paddingBottom: 30,
  },
  type: {
    textTransform: "capitalize",
    fontFamily: fonts.bold,
    fontSize: fontSizes.regular,
    borderRadius: 10,
    color: WHITE,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});
