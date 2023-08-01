import './index.css'

function Contacto() {

    return (
        <>
            <section id="contacto">
                <h5 className="text-contact">
                    ¡Dejanos tus datos y nos contactamos a la
                    brevedad! </h5>
                <div className="container-contact">
                    <div className="container-form">
                        <form className="container-form-text " action="" target="_blank">

                            <legend className="">Contactanos</legend>
                            <p className="etiqueta-form">Tu nombre: <input
                                className="etiqueta-form" required type="text" name="nombre" /></p>
                            <p className="etiqueta-form">Tu CUIT(sin guiones):
                                <input className="etiqueta-form" required type="text" name="correo" />
                            </p>
                            <p className="etiqueta-form">Tu Razon Social:
                                <input className="etiqueta-form" required type="text" name="correo" />
                            </p>
                            <p className="etiqueta-form">Tu dirección de
                                correo: <input className="etiqueta-form" required type="text" name="correo" />
                            </p>
                            <p className="etiqueta-form">Tu Teléfono: <input
                                className="etiqueta-form" required type="text" name="correo" /></p>
                            <p className="etiqueta-form">Tu Localidad y
                                Provincia: <input className="etiqueta-form" required type="text" name="correo" />
                            </p>
                            <p className="etiqueta-form">
                                Tu mensaje:<br />
                                <textarea className="etiqueta-form" name="mensaje"></textarea>

                            </p>

                            <div className=" "><button
                                className=""><input
                                    type="submit" value="Enviar mensaje" /></button>
                            </div>
                        </form>
                    </div>
                    <div className="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6569.490286678339!2d-58.52872857400661!3d-34.585314679049816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1687319846066!5m2!1ses-419!2sar"
                            class="w-[15rem] h-[20rem] lg:w-[20rem] lg:h-[30rem]" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contacto