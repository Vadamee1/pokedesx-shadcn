import AbilitiesAccordion from "@/components/pokedex/pokemonCard/Abilities";
import DetailBody from "@/components/pokedex/pokemonCard/DetailBody";
import DetailHeader from "@/components/pokedex/pokemonCard/DetailHeader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { fetchAbilities } from "@/lib/fetchers/pokemon/fetchAbilities";
import { fetchDetailPokemon } from "@/lib/fetchers/pokemon/fetchDetailPokemon";
import { fetchMoves } from "@/lib/fetchers/pokemon/moves";
import DetailDialog from "./DetailDialog";

interface Props {
  id: string;
}

export default async function PokemonCard({ id }: Props) {
  const pokemon = await fetchDetailPokemon(id);

  const abilitiesWithDescription = await fetchAbilities(pokemon.abilities);
  const movesWithDescription = await fetchMoves(pokemon.moves);

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <DetailHeader name={pokemon.name} id={id} baseStats={pokemon.stats} />
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          <DetailBody id={id} types={pokemon.types} sprites={pokemon.sprites} />
          <AbilitiesAccordion abilities={abilitiesWithDescription} />
        </CardContent>
        <CardFooter>
          <DetailDialog moves={movesWithDescription} />
        </CardFooter>
      </Card>
    </div>
  );
}
