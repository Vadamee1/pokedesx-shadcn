import {
  Abilities,
  AbilitiesWithDescription,
} from "@/types/pokemon/detail-pokemon";

export const fetchAbilities = async (abilities: Abilities[]) => {
  let responses: AbilitiesWithDescription[] = [];
  const abilitiesWithDescription = abilities.map((ability) =>
    fetch(`https://pokeapi.co/api/v2/ability/${ability.ability.name}`).then(
      (res) => res.json()
    )
  );
  try {
    responses = await Promise.all(abilitiesWithDescription);
  } catch {}

  return responses;
};
