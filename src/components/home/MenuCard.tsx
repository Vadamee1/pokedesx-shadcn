import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { navPages } from "@/config/site";
import { randomId } from "@/lib/utils";
import { pokemonNames, typesFont } from "@/config/fonts";

export default function MenuCard() {
  const { pokedex } = navPages;
  return (
    <Card>
      <CardHeader className="flex items-center">
        <CardTitle className={`${typesFont.className} text-2xl`}>
          {"Interest's points"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`/pokedex/${randomId()}`}>
          <div className="flex items-center gap-3 border border-transparent mt-5 px-5 py-4 transition-colors hover:border-red-300 hover:bg-red-100 hover:dark:border-red-700 hover:dark:bg-red-800/30 rounded-lg">
            <Image
              alt="Pikachu icon"
              src={pokedex.icon}
              width={50}
              height={50}
              className="text-white h-auto w-auto"
            />
            <p className={`${pokemonNames.className} text-2xl`}>
              {pokedex.name.toUpperCase()}
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
