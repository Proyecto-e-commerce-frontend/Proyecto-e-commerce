"use client";

function Inputs({ tipo, clases, placeholder, data, id }) {
    
    return (

        <>

            <input type={tipo} className={clases} placeholder={placeholder} data-input={data} id={id} required onChange={e => {

                Validación(e);
            }} />
            <span className="my-2 invisible w-64"></span>

        </>
    );
}

export default Inputs;

function Validación(evento) {
    
    const tipoInput = evento.target.id;
    const input = evento.target;
    const validityInput = input.validity;
    const span = input.nextElementSibling;
    
    const tipoErrores = ['valueMissing', 'typeMismatch'];
    const mensajesErrores = {
    
        email: {
    
            valueMissing: 'Este campo no puede estar vacio',
            typeMismatch: 'Debe contener por ejemplo: correo@ejemplo.com'
        },
    
        password: {
    
            valueMissing: 'Este campo no puede estar vacio'
        }
    }

    if(validityInput.valid == false){

        span.innerText = mostrarError(tipoInput, validityInput);
        span.style.visibility = 'visible';
        mensajeCustomizado(input, mostrarError(tipoInput, validityInput));
    } else {

        mensajeCustomizado(input, '');
    }

    function mensajeCustomizado(traerInput, mensaje) {
    
        traerInput.setCustomValidity(mensaje);
    }
    function mostrarError(tipoDeInput, inputValidity) {
    
        let mensaje = '';
    
        tipoErrores.forEach(err => {
    
            if(inputValidity[err]){
    
                mensaje = mensajesErrores[tipoDeInput][err];
            }
        })
    
        return mensaje;
    }
}