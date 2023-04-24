import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
    
    return(

            <footer className="flex mt-5">

                <Columna title={'Métodos de pago'} icon={faShop}/>
                <Columna title={'Política y privacidad'} icon={faBuildingShield}/>
                <Columna title={'Contacto'} icon={faIdCard}/>
                <a href="#" className="pr-10">

                    <img alt="Logo e-commerce" src="/e-commerce.png" />

                </a>

            </footer>
    );
}

function Columna({ title, icon }) {
    
    return(

            <div className="w-full text-center [&:not(:nth-child(3))]:border-r-4 border-solid border-white">
                <div className="flex justify-center">

                    <FontAwesomeIcon icon={icon} style={{

                        width: '8%',
                        marginRight: '1.2rem'
                    }} />
                    <h2 className="color-footer font-black text-xl">{title}</h2>

                </div>
                <ol className="leading-8 mt-4 text-sm ">

                    <hr className="w-3/4 mr-auto ml-auto"/>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>

                </ol>

            </div>
    );
}