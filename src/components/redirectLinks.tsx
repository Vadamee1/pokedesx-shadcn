"use client";

import { pokemonNames } from "@/config/fonts";
import { navPages } from "@/config/site";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  isSheet?: boolean;
}

export default function RedirectLinks({ isSheet }: Props) {
  const { pokedex } = navPages;
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(pokedex.href());
  };

  const dinamicClasssName = `flex items-center gap-2 ${
    isSheet ? "mt-5" : " left-1/2  -translate-x-1/2"
  }  cursor-pointer text-2xl ${pokemonNames.className}`;

  return (
    <div className={dinamicClasssName} onClick={handleLinkClick}>
      <Image
        alt="Pikachu icon"
        src={pokedex.icon}
        width={50}
        height={50}
        className="text-white"
      />
      {pokedex.name}
    </div>
  );
}
