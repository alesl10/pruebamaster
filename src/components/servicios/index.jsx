import './index.css'


function Servicios() {

    return (
        <>
            <section id="servicios" className="servicios">
                <h2
                    className=" title-servicios ">
                    Nuestros servicios</h2>

                <div className="container-servicios">
                    <div className="container-icon">
                        <img src="./images/iconos/camion (1).png" className="icon-serv" alt="imagen envios"/>
                            <p className="">Envíos a todo el pais</p>
                    </div>
                    {/* <div className="container-icon">
                        <p className="">Atencion personalizada</p>
                        <img src="./images/iconos/hombre (1).png" className="icon" alt=""/>
                    </div> */}
                    <div className="container-icon">
                        <img src="./images/iconos/hombre (1).png" className="icon-serv" alt="imagen atencion personalizada"/>
                            <p className="">Atención personalizada</p>
                    </div>
                    <div className="container-icon">
                        <img src="./images/iconos/favoritos (1).png" className="icon-serv" alt="imagen productos de calidad"/>
                            <p className="l">Productos de primera calidad
                            </p>
                    </div>
                    {/* <div className="">
                        <p className="">Importadores directos</p>
                        <img src="./images/iconos/globo (1).png" className=" icon" alt=""/>
                    </div> */}
                    <div className="container-icon ">
                        <img src="./images/iconos/globo (1).png" className="icon-serv" alt="imagen importadores directos"/>
                            <p className="">Importadores directos</p>
                    </div>
                </div>
            </section>

            <div class="flex justify-center my-10 sm:my-20">
                <hr className="w-48 border-2 sm:border-4"/>
            </div>

        </>
    )
}

export default Servicios
