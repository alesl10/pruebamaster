import './index.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


function Contacto() {

    const form =useRef();
    const sendEmail = (e) => {
        Swal.fire(
            '¡Buen trabajo!',
            'Su mensaje fue enviado',
            'success'
          )
        e.preventDefault();

        emailjs.sendForm('service_r2s1uhy', 'template_l6lc2tr', form.current, 'Uz1PxRjY_kwdr19gN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <section id="contacto">
                <h5 className="text-contact">
                    ¡Dejanos tus datos y nos contactamos a la
                    brevedad! </h5>
                <div className="container-form">
                    <form className="container-form-text " ref={form} onSubmit={sendEmail} target="_blank">

                        <legend className="">Contactanos</legend>

                        <div className="etiqueta-form">
                            <p >Tu nombre: </p>
                            <input required type="text" name="nombre" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu CUIT(sin guiones):</p>
                            <input required type="text" name="cuit" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Razon Social:</p>
                            <input required type="text" name="razon_social" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu dirección de correo:</p>
                            <input required type="text" name="correo" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Teléfono: </p>
                            <input required type="text" name="telefono" />
                        </div>
                        <div className="etiqueta-form">
                            <p >Tu Localidad y Provincia: </p>
                            <input required type="text" name="domicilio" />
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