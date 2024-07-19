import IndividualCard from "@/components/pokedex/IndividualCards";
import PokemonPagination from "@/components/pokedex/Pagination";
import PokemonCard from "@/components/pokedex/pokemonCard/Index";
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
    <div className="p-14 flex gap-2">
      <div className="md:basis-3/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pokemons.map((pokemon) => (
            <IndividualCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              offset={Number(searchParams.offset)}
            />
          ))}
        </div>
        <PokemonPagination data={data} offset={Number(searchParams.offset)} />
      </div>
      <div className="basis-2/5">
        <PokemonCard id={params.id} />
      </div>
    </div>
  );
}
