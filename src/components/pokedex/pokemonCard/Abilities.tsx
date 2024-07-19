import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { subtitlesFont } from "@/config/fonts";
import { AbilitiesWithDescription } from "@/types/pokemon";

interface Props {
  abilities: AbilitiesWithDescription[];
}

export default function AbilitiesAccordion({ abilities }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className={`text-2xl ${subtitlesFont.className}`}>Abilities:</h3>
      <Accordion type="single" collapsible>
        {abilities.map((ability) => (
          <AccordionItem key={ability.name} value={ability.name} className="">
            <AccordionTrigger>{ability.name.toUpperCase()}</AccordionTrigger>
            <AccordionContent>
              {ability.effect_entries[1]?.effect ??
                "Wow, it looks like we don't have an entry for this ability yet."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
