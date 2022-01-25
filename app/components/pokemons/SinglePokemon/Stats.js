import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

import { COLOR_TYPES, MEDIUM_GRAY, DARK_GRAY } from "../../../theme/colors";
import { fonts, fontSizes } from "../../../theme/fonts";

const Stats = ({ type }) => {
  return (
    <View style={styles.statsBox}>
      <Text style={[styles.statsTitle, { color: COLOR_TYPES[type] }]}>
        Base Stats
      </Text>
      <View style={styles.statsRow}>
        <Text>HP</Text>
        <Text>039</Text>
        <Progress.Bar
          progress={0.39}
          width={200}
          height={15}
          color={COLOR_TYPES[type]}
        />
      </View>
      <View style={styles.statsRow}>
        <Text>ATK</Text>
        <Text>052</Text>
        <Progress.Bar
          progress={0.52}
          width={200}
          height={15}
          color={COLOR_TYPES[type]}
        />
      </View>
      <View style={styles.statsRow}>
        <Text>DEF</Text>
        <Text>043</Text>
        <Progress.Bar
          progress={0.43}
          width={200}
          height={15}
          color={COLOR_TYPES[type]}
        />
      </View>
      <View style={styles.statsRow}>
        <Text>SDEF</Text>
        <Text>050</Text>
        <Progress.Bar
          progress={0.5}
          width={200}
          height={15}
          color={COLOR_TYPES[type]}
        />
      </View>
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
});
