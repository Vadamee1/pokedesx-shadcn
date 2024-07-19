export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};
