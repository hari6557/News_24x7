
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { NavLinks } from "./NavLinks";
import SearchBox from "./SearchBox";

export const NavBar = () => {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif underline underline-offset-4 decoration-orange-400 decoration-double decoration-2 text-6xl text-center">24x7</h1>
        </Link>
        <div className="flex items-center self-center justify-end space-x-2">
          <DarkModeButton/>
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox/>
    </header>
  );
};
