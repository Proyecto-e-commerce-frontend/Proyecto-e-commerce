"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default Header;

function Header() {
const [showSubMenu, setShowSubMenu] = useState(false);

function handleMouseEnter() {
    setShowSubMenu(true);
}

function handleMouseLeave() {
    setShowSubMenu(false);
}

return (
    <div className="flex px-8 py-4 items-center justify-between">
        <div className="flex items-center">
            <Image alt="Logo e-commerce" width={40} height={40} src="/e-commerce.png"></Image>
            <h2 className="text-white uppercase ml-1 font-medium">E-commerce</h2>
        </div>
        <nav>
            <ul className="flex">
                <li className="bg-indigo-500 rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Inicio</Link></li>
                <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link href="#">Productos</Link>
                    {showSubMenu && (
                        <ul className="absolute top-full left-0 rounded-md shadow-lg py-1 z-10">
                            <li className="bg-indigo-500 rounded-t-lg px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Computadoras</Link></li>
                            <li className="bg-indigo-500 px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Celulares</Link></li>
                            <li className="bg-indigo-500 px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Accesorios</Link></li>
                            <li className="bg-indigo-500 rounded-b-lg px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Periféricos</Link></li>
                        </ul>
                    )}
                </li>
                <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="./sobrenosotros">Sobre nosotros</Link></li>
                <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="./contacto">Contacto</Link></li>
            </ul>
        </nav>
        
    </div>
)
};
