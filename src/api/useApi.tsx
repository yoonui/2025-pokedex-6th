import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "./api";

export const useGetPokemon = (id: string) => {
  return useQuery({
    queryKey: ["getPokemon", id],
    queryFn: () => getPokemon(id),
  });
};
