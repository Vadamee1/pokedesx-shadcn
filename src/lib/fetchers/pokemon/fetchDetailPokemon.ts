import { DetailPokemon } from "@/types/pokemon/detail-pokemon";

export const fetchDetailPokemon = async (
  id: string
): Promise<DetailPokemon> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (res) => res.json()
  );

  return data;
};
