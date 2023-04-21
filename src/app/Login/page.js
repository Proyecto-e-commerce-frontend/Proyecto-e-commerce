import Header from "../header/page";

export default function Login() {
    
    return(

        /*parte del login */
        <>
            <Header/>

            <form action="#" className="">

                <fieldset className="formulario-contacto__contenido">

                    <legend className="formulario-contacto__contenido__titulo">Ingresar a mi cuenta</legend>
                    <label for='email' className="text-5xl">E-mail</label>
                    <input type="email" className="formulario-contacto__contenido__nombre" placeholder="Escriba su correo electrónico" required data-input="email" id="email"/>
                    <span className="formulario-contacto__contenido__span"></span>
                    <label for='password'>Contraseña</label>
                    <input className="formulario-contacto__contenido__nombre" type="password" placeholder="Escriba su contraseña" data-input="password" required id="password"/>
                    <span className="formulario-contacto__contenido__span"></span>
                    <button className="formulario-contacto__contenido__boton" type="submit" formaction="./menu-administrador.html">Entrar</button>

                </fieldset>

            </form>

        </>
        /*Hasta aquí */
    );
}