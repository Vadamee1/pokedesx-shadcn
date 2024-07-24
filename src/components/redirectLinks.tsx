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
    isSheet
      ? `mt-5 ${pokemonNames.className} text-2xl`
      : `left-1/2  -translate-x-1/2 text-xl`
  }  cursor-pointer`;

  return (
    <div className={dinamicClasssName} onClick={handleLinkClick}>
      {isSheet && (
        <Image
          alt="Pikachu icon"
          src={pokedex.icon}
          width={50}
          height={50}
          className="text-white"
        />
      )}
      <p className="hover:text-red-600">{pokedex.name}</p>
    </div>
  );
}
