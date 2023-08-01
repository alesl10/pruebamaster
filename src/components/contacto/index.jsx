import './index.css'

function Contacto() {

    return (
        <>
            <section id="contacto">
                <h5 className="text-contact">
                    ¡Dejanos tus datos y nos contactamos a la
                    brevedad! </h5>
                <div className="container-form">
                    <form className="container-form-text " action="" target="_blank">

                        <legend className="">Contactanos</legend>

                        <div className="etiqueta-form">
                            <p >Tu nombre: </p>
                            <input required type="text" name="nombre" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu CUIT(sin guiones):</p>
                            <input required type="text" name="correo" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Razon Social:</p>
                            <input required type="text" name="correo" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu dirección de correo:</p>
                            <input required type="text" name="correo" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Teléfono: </p>
                            <input required type="text" name="correo" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Localidad y Provincia: </p>
                            <input required type="text" name="correo" />
                        </div>
                        <div >
                            <p>
                                Tu mensaje:<br />
                            </p>
                            <textarea name="mensaje"></textarea>

                        </div>

                        <div className=" ">
                            <input type="submit" value="Enviar mensaje" className='boton-form' />
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Contacto