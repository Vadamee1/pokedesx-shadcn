import { BaseStat } from "./stats";

export type DetailPokemon = {
  abilities: Abilities[];
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  moves: MovePokemon[];
  stats: BaseStat[];
  sprites: Sprites;
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
  type: {
    name: string;
    url: string;
  };
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

export type Sprites = {
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    home: {
      front_default: string;
      front_shiny: string;
    };
    officialArtwork: {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      front_default: string;
      back_default: string;
      front_shiny: string;
      back_shiny: string;
    };
  };
};
