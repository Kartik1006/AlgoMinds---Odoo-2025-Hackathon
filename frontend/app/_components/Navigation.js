import Link from "next/link";
import { navLinks } from "@/app/_lib/constants";
import NavMobile from "./NavMobile";

export default function Navigation() {
  return (
    <nav className="z-10 text-[1.2rem]">
      <ul className="flex gap-16 items-center">
        {navLinks.map((link) => (
          <li
            className="h-10 px-0.5 py-2 font-bold transition-colors cursor-pointer hidden sm:block"
            key={link.to}
          >
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}

        <li className="mx-2 sm:hidden">
          <NavMobile></NavMobile>
        </li>
      </ul>
    </nav>
  );
}
