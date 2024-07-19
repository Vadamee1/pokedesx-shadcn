import { Button } from "@/components/ui/button";
import { pokemonNames } from "@/config/fonts";
import { IoStarOutline } from "react-icons/io5";
import Stats from "./Stats";
import { BaseStat } from "@/types/pokemon/stats";

interface Props {
  id: string;
  name: string;
  baseStats: BaseStat[];
}

export default function DetailHeader({ name, id, baseStats }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <Stats baseStats={baseStats} />
      <div className="flex gap-2">
        <span className={`text-xl ${pokemonNames.className}`}>#{id}</span>
        <p className={`text-xl mr-5 ${pokemonNames.className}`}>
          {name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
