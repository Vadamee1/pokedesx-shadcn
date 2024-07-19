import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { titleFont } from "@/config/fonts";
import { Separator } from "./ui/separator";
import RedirectLinks from "./redirectLinks";

export default function SheetNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar>
          <AvatarImage src="https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=900" />
          <AvatarFallback>PT</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
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
