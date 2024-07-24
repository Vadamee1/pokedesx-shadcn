import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BaseStat } from "@/types/pokemon/stats";
import StatsChart from "./StatsChart";

interface Props {
  baseStats: BaseStat[];
}

export default function Stats({ baseStats }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default">{"stats".toUpperCase()}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col justify-center items-center mt-3">
          <DrawerTitle>Pokemon stats</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <StatsChart baseStats={baseStats} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="destructive">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
