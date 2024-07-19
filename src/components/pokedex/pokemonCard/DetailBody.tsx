import { Card, CardContent } from "@/components/ui/card";
import { typesFont } from "@/config/fonts";
import { getIconType } from "@/lib/getIconType";
import { PokemonType } from "@/types/pokemon";
import Image from "next/image";

interface Props {
  image: string;
  types: PokemonType[];
  height: number;
  weight: number;
}

export default function DetailBody({ image, height, types, weight }: Props) {
  const pokemonType = getIconType(types);

  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center">
        <Image
          alt="Detail Pokemon image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`}
          width={200}
          height={200}
        />
      </div>
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
