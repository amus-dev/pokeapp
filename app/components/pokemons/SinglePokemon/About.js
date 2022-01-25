import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { COLOR_TYPES, MEDIUM_GRAY, DARK_GRAY } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const About = ({ type }) => {
  return (
    <View style={styles.aboutBox}>
      <Text style={[styles.title, { color: COLOR_TYPES[type] }]}>About</Text>
      <View style={[styles.row]}>
        <View style={[styles.column]}>
          <Text style={[styles.aboutText]}>8,5 kg</Text>
          <Text style={[styles.aboutSubText]}>Weight</Text>
        </View>
        <View style={[styles.column]}>
          <Text style={[styles.aboutText]}>0,6 m</Text>
          <Text style={[styles.aboutSubText]}>Height</Text>
        </View>
        <View style={[styles.column]}>
          <Text style={[styles.aboutText]}>Mega-Punch</Text>
          <Text style={[styles.aboutSubText]}>Moves</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: fonts.bold,
    marginVertical: 20,
  },
  row: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  aboutText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.regular,
    color: DARK_GRAY,
  },
  aboutSubText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.small,
    color: MEDIUM_GRAY,
  },
});
