export default function Login() {
    
    return(

        <>

            <form action="#" className="formulario-contacto">

                <fieldset class="formulario-contacto__contenido">

                    <legend class="formulario-contacto__contenido__titulo">Ingresar a mi cuenta</legend>
                    <input type="email" class="formulario-contacto__contenido__nombre" placeholder="Escriba su correo electrónico" required data-input="email" />
                    <span class="formulario-contacto__contenido__span"></span>
                    <input class="formulario-contacto__contenido__nombre" type="password" placeholder="Escriba su contraseña" data-input="password" required />
                    <span class="formulario-contacto__contenido__span"></span>
                    <button class="formulario-contacto__contenido__boton" type="submit" formaction="./menu-administrador.html">Entrar</button>

                </fieldset>

            </form>

        </>
 
    );
}