import IndividualCard from "@/components/pokedex/IndividualCards";
import PokemonPagination from "@/components/pokedex/Pagination";
import PokemonCard from "@/components/pokedex/pokemonCard/Index";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { fetchPokemons } from "@/lib/fetchers/pokemon/fecthPokemons";

interface Props {
  params: { id: string };
  searchParams: { offset: string };
}

export default async function Pokemon({ params, searchParams }: Props) {
  const { data, pokemons } = await fetchPokemons(
    15,
    Number(searchParams.offset)
  );

  return (
    <div className="md:p-14 md:flex gap-2 sm:grid">
      <div className="md:basis-3/5">
        <ScrollArea>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3">
            {pokemons.map((pokemon) => (
              <IndividualCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                offset={Number(searchParams.offset)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <PokemonPagination data={data} offset={Number(searchParams.offset)} />
      </div>
      <div className="basis-2/5 mt-4 md:mt-0">
        <PokemonCard id={params.id} />
      </div>
    </div>
  );
}
