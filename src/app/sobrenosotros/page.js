import Image from "next/image";

export default function Sobrenosotros(){
    return (

        <div className="px-36">
            <h2 className="text-2xl mb-2">Sobre nosotros</h2><br/>
            
            <p>Este emprendimiento se dedica a la venta de productos tecnológicos, específicamente computadoras y celulares. La tienda cuenta con una amplia variedad de marcas y modelos de dispositivos electrónicos, desde laptops y tablets hasta smartphones y accesorios.<br/><br/>

            <div class="flex px-8 py-4 items-center gap-4  justify-evenly">
                <Image alt="tienda1" className="rounded-md" width={300} height={300} src="/tienda1.png"></Image>
                <Image alt="tienda2" className="rounded-md" width={500} height={500} src="/tienda2.png"></Image>
            </div>

            Los clientes pueden encontrar productos de alta calidad y las últimas tendencias en tecnología, así como una amplia selección de precios para adaptarse a cualquier presupuesto. Además, la tienda también ofrece servicios de reparación y mantenimiento para dispositivos electrónicos, incluyendo diagnósticos, reemplazo de piezas y actualizaciones de software.<br/><br/>

            El personal de la tienda es altamente capacitado y está disponible para asesorar a los clientes en su proceso de compra, ofreciendo recomendaciones personalizadas basadas en sus necesidades y preferencias. Los clientes pueden realizar sus compras en la tienda física o a través de la tienda en línea, que ofrece una experiencia de compra fácil y segura.<br/><br/>

            <div class="flex px-8 py-4 items-center gap-4 justify-evenly">
                <Image alt="tienda3" className="rounded-md" width={400} height={400} src="/tienda3.png"></Image>
                <Image alt="tienda4" className="rounded-md" width={500} height={500} src="/tienda4.png"></Image>
            </div>

            En resumen, este emprendimiento se enfoca en ofrecer productos y servicios de alta calidad en el mercado tecnológico, con el objetivo de satisfacer las necesidades de sus clientes y brindarles la mejor experiencia de compra posible.
            
            <div class="flex px-8 py-4 items-center gap-4 justify-evenly">
                <Image alt="tienda5" className="rounded-md" width={400} height={400} src="/tienda5.png"></Image>
                <Image alt="tienda6" className="rounded-md" width={500} height={500} src="/tienda6.png"></Image>
            </div>
            </p><br/><br/><br/>

            <h2 className="text-2xl mb-2">Nuestra ubicación</h2><br/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.4534024668!2d-58.515698767740496!3d-34.615654769927005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1682901159113!5m2!1ses!2sar" width={600} height={450} className="border-0 ml-10"></iframe>

        </div>
    );
}