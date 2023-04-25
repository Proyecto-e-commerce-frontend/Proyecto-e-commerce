export default function Registro(){
    return (

        <div>

            <video src="/fondo-login.mp4" className="mt-20 opacity-30" autoPlay='true' muted loop></video>
            <form action="#" className="flex items-center justify-center h-screen mt-[-48rem] absolute w-full">
                    <fieldset className="formulario-contacto__contenido">
                        <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2">Formulario de registro</legend>
                            <div className="flex justify-between gap-36">
                                <div className="flex flex-1 flex-col">
                                    <label for='nombre' className="text-1">Nombre</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su nombre" data-input="text" id="nombre"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='email' className="text-1">E-mail</label>
                                    <input type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su correo electrónico" data-input="email" id="email"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='pais' className="text-1">País de residencia</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su país" data-input="text" id="pais"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='ciudad' className="text-1">Ciudad de residencia</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su ciudad" data-input="text" id="ciudad"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='password' className="text-1">Contraseña</label>
                                    <input type="password" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su contraseña" data-input="password" id="password"/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                
                                </div>
                                <div className="flex flex-1 flex-col">
                                <label for='apellido' className="text-1">Apellido</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su apellido" data-input="text" id="apellido"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='edad' className="text-1">Edad</label>
                                    <input type="number" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su edad" data-input="number" id="edad"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='domicilio' className="text-1">Domicilio</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su domicilio" data-input="text" id="domicilio"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='postal' className="text-1">Código postal</label>
                                    <input type="number" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su código postal" data-input="number" id="postal"/>
                                    <span className="formulario-contacto__contenido__span"></span>


                                    <label for='password' className="text-1">Repetir contraseña</label>
                                    <input className="formulario-contacto__contenido__nombre rounded-md mb-1 p-1 text-black bg-gray-200" type="password" placeholder="Repita su contraseña" data-input="password" id="reppassword"/>
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