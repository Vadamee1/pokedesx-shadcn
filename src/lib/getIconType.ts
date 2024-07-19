import { pokemonTypes } from "@/constants/pokemonTypes";
import { PokemonType } from "@/types/pokemon";

export const getIconType = (types: PokemonType[]) => {
  const arrayTypes = types.map((type) => {
    return pokemonTypes.find((icon) => icon.type.name === type.type.name);
  });
  return arrayTypes;
};
