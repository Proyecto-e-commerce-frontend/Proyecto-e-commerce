export function Inputs({ tipo, clases, placeholder, data, id }) {
    
    return (

        <>

            <input type={tipo} className={clases} placeholder={placeholder} data-input={data} id={id} required/>
            <span></span>

        </>
    );
}