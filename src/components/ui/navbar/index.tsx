import Image from "next/image";
import { ActionNavbar } from "./actionNavbar";
import logo from "../../../../public/logo.png"

export const Navbar = () => {
    return (
      <nav className="w-full bg-transparent">
        <div className="flex items-center justify-center md:justify-start md:px-10 py-4 border-b-1">
          <div>
            <Image src={logo} className="h-10 w-10" alt="Logo" />
          </div>
          <ActionNavbar />
        </div>
      </nav>
    );
}