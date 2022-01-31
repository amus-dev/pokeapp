export const SET_POKEMONS = "SET_POKEMONS";

export const setPokemons = (pokemon) => (dispatch) => {
  dispatch({
    type: SET_POKEMONS,
    payload: pokemon,
  });
};
