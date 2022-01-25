import { BASE_URL, OFFSET, LIMIT } from "./config";

export const fetchPokemons = async () => {
  return fetch(`${BASE_URL}/pokemon/?offset=${OFFSET}&limit=${LIMIT}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => response.results);
};

export const fetchPokemonByName = async (namePokemon) => {
  return fetch(`${BASE_URL}/pokemon/${namePokemon}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => response);
};

// export const fetchPokemonsByType = async (idPokemon) => {
//   return fetch(`${BASE_URL}/type/${idPokemon}`)
//     .then((res) => res.json())
//     .catch((error) => console.error("Error:", error))
//     .then((response) => response);
// };
