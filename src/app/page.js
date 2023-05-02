import React from "react";
import Inputs from "./components/login y registro/inputs.js";

export default function Login() {

    return(

        /*parte del login */

            <div>
                <video src="/fondo-login.mp4" className="mt-20 opacity-30" autoPlay='true' muted loop></video>
                <form action="#" className="flex items-center justify-center mt-[-60rem] absolute w-full">
                <fieldset className="formulario-contacto__contenido">
                    <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2">Ingresar a mi cuenta</legend>
                        <label for='email' className="text-1">E-mail</label>
                        <Inputs tipo='email' clases='formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200 w-[17rem] mb-2' placeholder='Escriba su correo electrónico' data='email' id='email' />
                        <label for='password' className="text-1">Contraseña</label>
                        <Inputs tipo='password' clases='formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-200 mb-2' placeholder='Escriba su contraseña' data='password' id='password' />
                        <button className="bg-indigo-500 rounded-md formulario-contacto__contenido__boton text-2 m-2 p-1" type="submit" formaction="./menu-administrador.html">INGRESAR</button>
                        <a href="./registro" className="flex self-center m-2 hover:text-indigo-500"><strong>REGISTRARSE</strong></a>
                    </div>
                </fieldset>
                </form>
            </div>

        /*Hasta aquí */
    );
}



