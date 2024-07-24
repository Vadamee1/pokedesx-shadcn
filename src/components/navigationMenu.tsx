"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { navPages } from "@/config/site";
import { useRouter } from "next/navigation";
import { pokemonNames } from "@/config/fonts";
import React from "react";
import { cn } from "@/lib/utils";

export default function NavbarMenu() {
  const { pokedex } = navPages;
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(pokedex.href());
  };

  return (
    <NavigationMenu className="absolute left-1/2 -translate-x-1/2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <div
            onClick={handleLinkClick}
            title={pokedex.name}
            className={`flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:dark:bg-primary/90 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${pokemonNames.className}`}
          >
            {pokedex.name}
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:dark:border-red-700 hover:dark:bg-red-800/30 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div
            className={`text-sm font-medium leading-none ${pokemonNames.className}`}
          >
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
