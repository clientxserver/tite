import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";

function Header() {
    return ( 
   <header>
        <div className="grid items-center grid-cols-3 p-10">
            <Bars3Icon className="w-8 h-8 cursor-default" />
       
            <div className="mx-auto">
                <p>TRAILZ Technologies LLC</p>
            </div>
        </div>

        <NavLinks />
   </header>
    
    );
}

export default Header;