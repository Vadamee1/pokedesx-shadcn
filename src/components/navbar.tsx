import { Separator } from "./ui/separator";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import RedirectLinks from "./redirectLinks";
import SheetNavbar from "./sheetNavbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center px-5 md:px-32 pt-5">
        <div className="flex space-x-2 items-center">
          <SheetNavbar />
          <Link href="/">
            <span className={`${titleFont.className} text-2xl`}>Pokemon</span>
          </Link>
          <Link href="https://nextjs.org/" className="text-xs mb-6">
            with Next.js
          </Link>
        </div>
        <div className="hidden lg:block">
          <RedirectLinks />
        </div>
        <Avatar>
          <AvatarImage
            src="https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=900"
            alt="Avatar image"
            className="object-cover"
          />
          <AvatarFallback>PT</AvatarFallback>
        </Avatar>
      </div>
      <Separator className="my-5" />
    </div>
  );
}
