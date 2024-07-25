import { pokemonNames, subtitlesFont } from "@/config/fonts";
import Image from "next/image";
import { IoGameController, IoPeople } from "react-icons/io5";

export default function Welcome() {
  return (
    <div className="w-2/3">
      <h1 className={`text-7xl ${subtitlesFont.className}`}>
        Welcome, Pokemon trainer!
      </h1>
      <div className="flex gap-2 mt-10">
        <Image alt="Podekex icon" src="/Pokedex.png" width={220} height={200} />
        <div className={`grid ${pokemonNames.className} text-3xl gap-2`}>
          <p>
            This is a Pokedex with all the species existing so far, including
            regional forms, Megaevolutions and Gigamax forms.
          </p>
          <p>
            Looking for some facts about your favorite Pokemon? You will find
            stats, skills, or want you know what moves it can learn
          </p>
        </div>
      </div>
      <div className={`grid ${pokemonNames.className} text-3xl gap-2 mt-32`}>
        <p>Coming soon!</p>
        <div className="flex gap-2 items-center text-2xl">
          <IoPeople className="text-3xl" />
          <p>Team generator</p>
        </div>
        <div className="flex gap-2 items-center text-2xl">
          <IoGameController className="text-3xl" />
          <p>Combat simulator</p>
        </div>
      </div>
    </div>
  );
}
