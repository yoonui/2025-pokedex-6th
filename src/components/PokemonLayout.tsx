"use client";

// import { useGetPokemon } from "@/api/useApi";
import { getPokemon, pokemonType } from "@/api/api";

export default function PokemonLayout() {
  //   const { data } = useGetPokemon({ limit: 72, offset: 649 });

  const arr: pokemonType[] = [];

  for (let i = 650; i < 722; i++) {
    getPokemon(i).then(function (response) {
      arr.push(response);
      // response Action
    });
  }

  console.log("arr");
  console.log(arr);

  return <div>ddddd</div>;
}
