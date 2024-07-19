import { BaseStat } from "./stats";

export type DetailPokemon = {
  abilities: Abilities[];
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  moves: MovePokemon[];
  stats: BaseStat[];
  sprites: {
    other: {
      officialArtwork: {
        front_default: string;
      };
    };
  };
};

export type Abilities = {
  ability: {
    name: string;
  };
  url: string;
};

export type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};

export type MovePokemon = {
  move: {
    name: string;
    url: string;
  };
};

export type MoveWithDescription = {
  name: string;
  type: PokemonType;
  power: number;
  pp: number;
  damage_class: {
    name: string;
    url: string;
  };
  effect_entries: MoveEffectEntries[];
};

export type MoveEffectEntries = {
  effect: string;
  short_effect: string;
};

export type AbilitiesWithDescription = {
  name: string;
  effect_entries: EffectEntries[];
};

export type EffectEntries = {
  effect: string;
};
