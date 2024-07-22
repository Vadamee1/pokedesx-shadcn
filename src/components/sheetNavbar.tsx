import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
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
          <div className="flex gap-1 justify-center">
            <span className={`${titleFont.className} text-2xl`}>Pokemon</span>
            <Link href="https://nextjs.org/" className="text-xs">
              with Next.js
            </Link>
          </div>
        </SheetHeader>
        <Separator className="mt-2" />
        <div className="mt-20">
          <RedirectLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
