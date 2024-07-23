import { Card } from "@/components/ui/card";
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
      <div className="flex justify-center items-center">
        <Card className="flex flex-col items-center justify-center h-24 md:w-32 gap-3">
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
        </Card>
      </div>
    </div>
  );
}
