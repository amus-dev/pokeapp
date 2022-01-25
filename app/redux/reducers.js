import { SET_POKEMONS } from "./actions";

const initialState = {
  dataPokemons: [],
  dataInfoPokemon: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, dataPokemons: action.payload };
    default:
      return state;
  }
}

export default pokemonReducer;
