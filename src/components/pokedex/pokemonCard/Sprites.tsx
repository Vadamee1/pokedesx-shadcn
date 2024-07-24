import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Sprites } from "@/types/pokemon/detail-pokemon";
import Image from "next/image";

interface Props {
  sprites: Sprites;
  id: string;
}

export default function SpritesCarousel({ sprites, id }: Props) {
  const arraySprites = [];
  arraySprites.push(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    sprites.front_default,
    sprites.other.dream_world?.front_default,
    sprites.other.home?.front_default,
    sprites.other.showdown?.front_default
  );

  return (
    <Carousel>
      <CarouselContent>
        {arraySprites.map(
          (sprite) =>
            sprite && (
              <CarouselItem key={sprite}>
                <div className="flex justify-center">
                  <Image
                    alt="Pokemon image"
                    className="object-fill h-60 w-60"
                    src={sprite}
                    width={200}
                    height={200}
                  />
                </div>
              </CarouselItem>
            )
        )}
      </CarouselContent>
    </Carousel>
  );
}
