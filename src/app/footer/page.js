export default function Footer() {
    
    return(

        <footer className="flex mt-5">

            <Columna title={'Métodos de pago'}/>
            <Columna title={'Política y privacidad'}/>
            <Columna title={'Contacto'}/>
            <a href="#" className="pr-10">

                <img alt="Logo e-commerce" src="/e-commerce.png" />

            </a>

        </footer>
    );
}

function Columna({ title }) {
    
    return(
    
        <div className="w-full text-center">

            <h2 className="color-footer font-black text-xl">{title}</h2>
            <ol className="leading-8 mt-4 text-sm">

                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>

            </ol>

        </div>
    );
}