import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ArrowPrev from "../../assets/images/svg/ArrowPrev";
import ArrowNext from "../../assets/images/svg/ArrowNext";

//Redux
import { useDispatch } from "react-redux";
import { setPokemons } from "../../redux/actions";
// Services
import { fetchPokemons } from "../../services/getPokemons";
//utils
import { OFFSET, LIMIT } from "../../services/config";
import { useEffect } from "react";
//Themes
import { fonts, fontSizes } from "../../theme/fonts";

const Paginate = () => {
  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(OFFSET);

  useEffect(() => {
    if (offSet >= 0) {
      const promisePokemons = Promise.resolve(fetchPokemons(offSet));
      promisePokemons.then((pokemons) => dispatch(setPokemons(pokemons)));
    }
  }, [offSet]);

  return (
    <View style={styles.contentPaginate}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setOffSet(offSet - LIMIT)}
      >
        <ArrowPrev width={20} height={20} />
        <Text style={styles.label}>Atras</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => setOffSet(offSet + LIMIT)}
        >
          <Text style={styles.label}>Siguiente</Text>
          <ArrowNext width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Paginate;

const styles = StyleSheet.create({
  contentPaginate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: fontSizes.regular,
    fontFamily: fonts.regular,
    paddingHorizontal: 10,
  },
});
