import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { navPages } from "@/config/site";
import { randomId } from "@/lib/utils";
import { pokemonNames, typesFont } from "@/config/fonts";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IoGameController, IoPeople } from "react-icons/io5";

export default function MenuCard() {
  const { pokedex } = navPages;
  return (
    <Card className="mt-10 md:mt-0">
      <CardHeader className="flex items-center">
        <CardTitle className={`${typesFont.className} text-2xl`}>
          {"Interest's points"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col ">
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
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center h-36 gap-3 border border-transparent mt-5 px-5 py-4 transition-colors hover:border-red-300 hover:bg-red-100 hover:dark:border-red-700 hover:dark:bg-red-800/30 rounded-lg">
              <IoPeople className="text-6xl" />
              <p className={`${pokemonNames.className} text-2xl`}>
                {"Team generator".toUpperCase()}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className={`${typesFont.className} text-3xl`}>
            Coming soon.
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center h-36 w-full gap-3 border border-transparent mt-5 px-5 py-4 transition-colors hover:border-red-300 hover:bg-red-100 hover:dark:border-red-700 hover:dark:bg-red-800/30 rounded-lg">
              <IoGameController className="text-6xl" />
              <p className={`${pokemonNames.className} text-2xl`}>
                {"Combat simulator".toUpperCase()}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className={`${typesFont.className} text-3xl`}>
            Coming soon.
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  );
}
