"use client";
import React, {useRef, useState} from 'react';
import Inputs from "./components/login y registro/inputs.js";
import ReCAPTCHA from "react-google-recaptcha";

export default Login;

function Login() {

    const [captchaValido, cambiarCaptchaValido] = useState(null);
    const [usuarioValido, cambiarUsuarioValido] = useState(false);

    const captcha = useRef(null);

    const onChange = () => {
		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
            cambiarCaptchaValido(true);
		}
	}

    const submit = (e) => {
		e.preventDefault();

		if(captcha.current.getValue()){
			console.log('El usuario no es un robot');
            cambiarUsuarioValido(true);
            cambiarCaptchaValido(true);
		} else {
			console.log('Por favor acepta el captcha');
            cambiarUsuarioValido(false);
            cambiarCaptchaValido(false);
		}
	}

    return(

        /*parte del login */

            <div className='flex relative grow'>
                <video src="/fondo-login.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay='true' muted loop></video>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 mix-blend-overlay'></div>
                <form action="#" className="flex items-center justify-center relative z-2 m-auto" onSubmit={submit}>
                <fieldset className="formulario-contacto__contenido">
                    <div className="flex flex-col">
                        <legend className="formulario-contacto__contenido__titulo text-2xl mb-2 self-center">Ingresar a mi cuenta</legend>
                        <label for='email' className="text-1">E-mail</label>
                        <Inputs tipo='email' clases='formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-200 mb-2' placeholder='Escriba su correo electrónico' data='email' id='email' />
                        <label for='password' className="text-1">Contraseña</label>
                        <Inputs tipo='password' clases='formulario-contacto__contenido__nombre rounded-md p-1 text-black bg-gray-200 mb-2' placeholder='Escriba su contraseña' data='password' id='password' />
                        <button className="bg-indigo-500 rounded-md formulario-contacto__contenido__boton text-2 m-2 p-1" type="submit" formaction="./menu-administrador.html">INGRESAR</button>
                        <div className="recaptcha">
							<ReCAPTCHA
								ref={captcha}
								sitekey="6LfcT9wlAAAAAKGmYq-KUn0iEor-e92KiMpIdNtz"
								onChange={onChange}/>
						</div>
                        {captchaValido === false && <div className="text-red-500 mb-5">Por favor acepta el captcha</div>}
                        <a href="./registro" className="flex self-center m-2 hover:text-indigo-500"><strong>REGISTRARSE</strong></a>
                    </div>
                </fieldset>
                </form>
            </div>

        /*Hasta aquí */
    );
}



