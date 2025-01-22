"use client";

import { useGetPokemon } from "@/api/useApi";

export default function Test() {
  const { data } = useGetPokemon("1");

  console.log("data");
  console.log(data);

  return <></>;
}
