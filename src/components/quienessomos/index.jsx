import './index.css'


function QuienesSomos() {

    return (
        <>

            <section id="quienesSomos" className="section-quienes">
                <p className="title-quienes">¿Quienes somos?</p>
                <div className="flex flex-grow items-center bg-orange-300/90 container-quienes ">

                    <img className="img-quienes" src="./images/pngwing.com.png" alt="chef image"/>

                        <div
                            className=" container-text ">
                            <p className=" ">
                                Somos una empresa con 15 años de experiencia, especializados en la distribucion de productos
                                alimenticios y
                                abasteciendo al rubro gastronomico y pastelero en todo el pais, con insumos de primera
                                calidad.
                            </p>
                        </div>
                </div>
            </section>

            <div className="flex justify-center my-10 sm:my-20">
                <hr className="w-48 border-2 sm:border-4"/>
            </div>
        </>
    )
}

export default QuienesSomos
