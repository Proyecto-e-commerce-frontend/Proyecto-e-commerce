import React from "react";

export default function Login() {

    return(

        /*parte del login */
        <>
            <form action="#" className="flex items-center justify-center h-screen">
                <fieldset className="formulario-contacto__contenido">
                    <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2">Ingresar a mi cuenta</legend>
                        <label for='email' className="text-1">E-mail</label>
                        <input type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su correo electrónico" data-input="email" id="email"/>
                        <span className="formulario-contacto__contenido__span"></span>
                        <label for='password' className="text-1">Contraseña</label>
                        <input className="formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-200" type="password" placeholder="Escriba su contraseña" data-input="password" id="password"/>
                        <span className="formulario-contacto__contenido__span"></span>
                        <button className="bg-indigo-500 rounded-md formulario-contacto__contenido__boton text-2 m-2 p-1" type="submit" formaction="./menu-administrador.html">INGRESAR</button>
                        <a href="#" className="flex self-center m-2 hover:text-indigo-500"><strong>REGISTRARSE</strong></a>
                    </div>
                </fieldset>

            </form>

        </>
        /*Hasta aquí */
    );
}