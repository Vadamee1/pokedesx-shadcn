import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { subtitlesFont } from "@/config/fonts";
import { MoveWithDescription } from "@/types/pokemon/detail-pokemon";

interface Props {
  moves: MoveWithDescription[];
}

export default function MovesAccordion({ moves }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className={`text-2xl ${subtitlesFont.className}`}>Moves:</h3>
      <Accordion type="single" collapsible>
        {moves.map((move) => (
          <AccordionItem key={move.name} value={move.name} className="">
            <AccordionTrigger>{move.name.toUpperCase()}</AccordionTrigger>
            <AccordionContent>
              {move.effect_entries[1]?.effect ??
                "Wow, it looks like we don't have an entry for this move yet."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
