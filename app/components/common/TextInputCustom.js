import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { WHITE, LIGHT_GRAY } from "../../theme/colors";

const TextInputCustom = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState();

  return (
    <TextInput
      style={styles.inputSearch}
      placeholder={placeholder}
      onChangeText={setText}
      onEndEditing={() => console.log(text)}
    />
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  inputSearch: {
    marginVertical: 10,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    borderRadius: 8,
    textAlign: "center",
    height: 30,
  },
});
