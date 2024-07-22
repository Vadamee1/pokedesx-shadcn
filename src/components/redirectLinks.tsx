"use client";

import { navPages } from "@/config/site";
import { useRouter } from "next/navigation";

export default function RedirectLinks() {
  const { pokedex } = navPages;
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(pokedex.href());
  };

  return (
    <div
      className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={handleLinkClick}
    >
      {pokedex.name}
    </div>
  );
}
