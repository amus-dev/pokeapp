import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SvgCssUri } from "react-native-svg";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

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

  //Images SVG
  const arrowPrev = require("../../assets/images/svg/arrow-prev.svg");
  const arrowPrevSVG = resolveAssetSource(arrowPrev);
  const arrowNext = require("../../assets/images/svg/arrow-next.svg");
  const arrowNextSVG = resolveAssetSource(arrowNext);

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
        <SvgCssUri width={20} height={20} uri={arrowPrevSVG.uri} />
        <Text style={styles.label}>Atras</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => setOffSet(offSet + LIMIT)}
        >
          <Text style={styles.label}>Siguiente</Text>
          <SvgCssUri width={20} height={20} uri={arrowNextSVG.uri} />
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
