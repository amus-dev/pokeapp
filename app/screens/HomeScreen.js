import React, { useEffect } from "react";
import LayoutHome from "../layouts/LayoutHome";
//Redux
import { useDispatch } from "react-redux";
import { setPokemons } from "../redux/actions";
// Services
import { fetchPokemons } from "../services/getPokemons";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promisePokemons = Promise.resolve(fetchPokemons());
    promisePokemons.then((pokemons) => dispatch(setPokemons(pokemons)));
  }, []);

  return <LayoutHome />;
};

export default HomeScreen;
