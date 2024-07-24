import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { pokemonNames } from "@/config/fonts";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  offset: number;
}

export default function IndividualCard({ id, name, offset }: Props) {
  const newOffset = offset ? offset : 0;
  return (
    <Link href={`${id}?offset=${newOffset}`}>
      <Card className="border border-transparent px-5 py-4 transition-colors hover:border-red-300 hover:bg-red-100 hover:dark:border-red-700 hover:dark:bg-red-800/30">
        <CardContent>
          <div className="lg:flex">
            <Image
              alt="Pokemon front image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              priority
              height={100}
              width={100}
            />
            <div
              className={`flex flex-col w-full justify-center items-center ${pokemonNames.className}`}
            >
              <span>#{id}</span>
              <p>{name.toUpperCase()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
