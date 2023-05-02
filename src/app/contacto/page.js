export default function Contacto(){
    return (

        <div>
            <video src="/fondo-login.mp4" className="mt-20 opacity-30" autoPlay='true' muted loop></video>
            <form action="#" className="flex items-center justify-center mt-[-60rem] absolute w-full">
                    <fieldset className="formulario-contacto__contenido">
                        <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2">Contacto</legend>
                        <legend className="formulario-contacto__contenido__titulo text-1 mb-2">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.</legend>
                                <div className="flex flex-1 flex-col">
                                    <label for='nombreyapellido' className="text-1">Nombre y apellido</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su nombre y apellido" data-input="text" id="nombreyapellido"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='email' className="text-1">E-mail</label>
                                    <input type="email" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba su correo electrónico" data-input="email" id="email"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='asunto' className="text-1">Asunto</label>
                                    <input type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 text-black bg-gray-200" placeholder="Escriba el asunto" data-input="text" id="asunto"/>
                                    <span className="formulario-contacto__contenido__span"></span>

                                    <label for='mensaje' className="text-1">Mensaje</label>
                                    <textarea type="text" className="formulario-contacto__contenido__nombre rounded-md mb-2 p-1 h-40 text-black bg-gray-200" placeholder="Escriba su mensaje..." data-input="text" id="mensaje"/>
                                    <span className="formulario-contacto__contenido__span"></span>
                                </div>
                        </div>
                        <a href="#" className="flex self-center m-2 hover:text-indigo-500"><strong>Enviar</strong></a>
                    </fieldset>

                </form>

        </div>
    );
}