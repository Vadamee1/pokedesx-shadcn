import { randomId } from "@/lib/utils";

export const navPages = {
  pokedex: {
    name: "Pokedex",
    href: () => `/pokedex/${randomId()}`,
  },
};
