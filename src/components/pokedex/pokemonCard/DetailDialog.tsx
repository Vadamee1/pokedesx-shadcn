import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MoveWithDescription } from "@/types/pokemon/detail-pokemon";

interface Props {
  moves: MoveWithDescription[];
}

export default function DetailDialog({ moves }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full">
          Moves
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-max">
        <DialogHeader>
          <DialogTitle>Moves</DialogTitle>
          <DialogDescription>{"A Pokemon's different moves"}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="rounded-md  border h-96">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {moves.map((move) => (
              <Card key={move.name} className="w-72">
                <CardHeader className="w-48">
                  {move.name.toUpperCase()}
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex gap-1">
                    <p>Damage class: </p>
                    <p>{` ${move.damage_class.name}`}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Power: </p>
                    <p>{` ${move.power ?? "-"}`}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>PP: </p>
                    <p>{` ${move.pp ?? "-"}`}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Type: </p>
                    <p>{` ${move.type.name}`}</p>
                  </div>
                  <Accordion type="multiple">
                    <AccordionItem value="Effect">
                      <AccordionTrigger>{"Effect"}</AccordionTrigger>
                      <AccordionContent>
                        {move.effect_entries[0]?.effect ??
                          "Wow, it looks like we don't have an entry for this ability yet."}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
