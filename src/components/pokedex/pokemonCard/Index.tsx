import AbilitiesAccordion from "@/components/pokedex/pokemonCard/Abilities";
import DetailBody from "@/components/pokedex/pokemonCard/DetailBody";
import DetailHeader from "@/components/pokedex/pokemonCard/DetailHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fetchAbilities } from "@/lib/fetchers/pokemon/fetchAbilities";
import { fetchDetailPokemon } from "@/lib/fetchers/pokemon/fetchDetailPokemon";

interface Props {
  id: string;
}

export default async function PokemonCard({ id }: Props) {
  const pokemon = await fetchDetailPokemon(id);

  const abilitiesWithDescription = await fetchAbilities(pokemon.abilities);

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <DetailHeader name={pokemon.name} id={id} baseStats={pokemon.stats} />
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          <DetailBody
            image={id}
            types={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
          />
          <AbilitiesAccordion abilities={abilitiesWithDescription} />
        </CardContent>
      </Card>
    </div>
  );
}
