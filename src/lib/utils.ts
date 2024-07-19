import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomId() {
  return Math.floor(Math.random() * (1026 - 1 + 1)) + 1;
}
