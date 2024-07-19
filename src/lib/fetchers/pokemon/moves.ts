import {
  MovePokemon,
  MoveWithDescription,
} from "@/types/pokemon/detail-pokemon";

export const fetchMoves = async (moves: MovePokemon[]) => {
  let responses: MoveWithDescription[] = [];
  const abilitiesWithDescription = moves.map((move) =>
    fetch(`https://pokeapi.co/api/v2/move/${move.move.name}`).then((res) =>
      res.json()
    )
  );
  try {
    responses = await Promise.all(abilitiesWithDescription);
  } catch {}

  return responses;
};
