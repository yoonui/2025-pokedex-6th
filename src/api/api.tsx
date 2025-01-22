import axios from "axios";

export type parmsType = { limit: number; offset: number };

export type pokemonType = {
  id: number;
  sprites: {
    front_default: string;
    other: { "official-artwork": { front_default: string } };
  };
};

// export const getPokemon = async (parms: parmsType) => {
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
//     params: { limit: parms.limit, offset: parms.offset },
//   });
//   return response.data;
// };

export const getPokemon = async (id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};
