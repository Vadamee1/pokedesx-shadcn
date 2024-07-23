import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { titleFont } from "@/config/fonts";
import { Separator } from "./ui/separator";
import RedirectLinks from "./redirectLinks";
import { IoMenuSharp } from "react-icons/io5";

export default function SheetNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMenuSharp className="text-xl" aria-label="Menu" role="button" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className={`flex ${titleFont.className} gap-1`}>
            <Link href="/">{"pokemon".toUpperCase()}</Link>
            <Link href="https://nextjs.org/" className="text-xs">
              with Next.js
            </Link>
          </SheetTitle>
          <SheetDescription> </SheetDescription>
        </SheetHeader>
        <Separator className="mt-2" />
        <RedirectLinks isSheet />
      </SheetContent>
    </Sheet>
  );
}
