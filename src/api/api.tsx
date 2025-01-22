import axios from "axios";

export const getPokemon = async (id: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};
