import { getIconType } from "@/lib/getIconType";
import { PokemonType } from "@/types/pokemon";
import { Sprites } from "@/types/pokemon/detail-pokemon";
import Image from "next/image";
import SpritesCarousel from "./Sprites";

interface Props {
  id: string;
  types: PokemonType[];
  sprites: Sprites;
}

export default function DetailBody({ id, types, sprites }: Props) {
  const pokemonType = getIconType(types);

  return (
    <div className="grid grid-cols-2">
      <SpritesCarousel sprites={sprites} id={id} />
      <div className="flex flex-col gap-3 justify-center items-center">
        {pokemonType.map((type) => (
          <div key={type?.type.url} className="flex gap-1">
            <Image
              alt="Icon pokemon type"
              src={type?.type.url ?? ""}
              width={30}
              height={30}
            />
            {type?.type.name.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
