export default function Registro(){
    return (

        <div>

            <video src="/fondo-login.mp4" className="mt-20 opacity-30" autoPlay='true' muted loop></video>
            <form action="#" className="flex items-center justify-center h-screen mt-[-59rem] absolute w-full">
                    <fieldset className="formulario-contacto__contenido">
                        <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2">Formulario de registro</legend>
                            <div className="flex justify-between gap-24">
                                <div className="flex flex-1 flex-col">
                                    <label for='email' className="text-1">E-mail</label>
                                    <input type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su correo electrónico" data-input="email" id="email"/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <label for='password' className="text-1">Contraseña</label>
                                    <input className="formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-200" type="password" placeholder="Escriba su contraseña" data-input="password" id="password"/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                </div>
                            </div>
                            
                    
                            <a href="#" className="flex self-center m-2 hover:text-indigo-500"><strong>REGISTRARSE</strong></a>
                        </div>
                    </fieldset>

                </form>

        </div>
    );
}