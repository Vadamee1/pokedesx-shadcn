import { IoHomeOutline } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import RedirectLinks from "./redirectLinks";
import SheetNavbar from "./sheetNavbar";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center px-32 pt-5">
        <div className="flex space-x-2">
          <Link href="/">
            <IoHomeOutline className="text-2xl" />
          </Link>
          <div className="hidden md:flex gap-1  ">
            <span className={`${titleFont.className} text-2xl`}>Pokemon</span>
            <Link href="https://nextjs.org/" className="text-xs">
              with Next.js
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <RedirectLinks />
        </div>
        <SheetNavbar />
      </div>
      <Separator className="my-5" />
    </div>
  );
}
