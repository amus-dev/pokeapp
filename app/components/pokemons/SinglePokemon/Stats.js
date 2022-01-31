import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
// Utils and themes
import {
  setNumberThreeDigits,
  substrForIndex,
  converStringToDecimal,
} from "../../../utils/functions";
import { COLOR_TYPES } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const Stats = ({ type, stats }) => {
  return (
    <View style={styles.statsBox}>
      <Text style={[styles.statsTitle, { color: COLOR_TYPES[type] }]}>
        Base Stats
      </Text>

      {stats.map((item) => (
        <View style={styles.statsRow}>
          <Text style={styles.labelText}>
            {substrForIndex(item.stat.name, 2)}
          </Text>
          <Text style={styles.labelText}>
            {setNumberThreeDigits(item.base_stat)}
          </Text>
          <Progress.Bar
            progress={converStringToDecimal(item.base_stat)}
            width={200}
            height={15}
            color={COLOR_TYPES[type]}
          />
        </View>
      ))}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  statsBox: {
    marginTop: 20,
  },
  statsTitle: {
    fontSize: fontSizes.title,
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  statsRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  labelText: {
    fontSize: fontSizes.small,
    fontFamily: fonts.regular,
    textTransform: "capitalize",
  },
});
