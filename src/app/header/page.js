import Link from "next/link";

export default function Header() {
    return (
        <div className="flex px-8 py-4 items-center justify-between">
            <div className="flex items-center">
                <img alt="Logo e-commerce" className="w-12" src="/e-commerce.png"></img>
                <h2 className="text-white uppercase ml-1 font-medium">E-commerce</h2>
            </div>
            <nav>
                <ul className="flex">
                    <li className="bg-indigo-500 rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Inicio</Link></li>
                    <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Productos</Link></li>
                    <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Sobre nosotros</Link></li>
                    <li className="hover:bg-indigo-500 hover:rounded-md px-2 py-1 mx-2 text-center uppercase font-medium"><Link href="#">Contacto</Link></li>
                </ul>
            </nav>
            
        </div>
    );
}