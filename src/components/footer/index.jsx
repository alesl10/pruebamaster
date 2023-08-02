import './index.css'

function Footer() {

    return (
        <>
            <footer className="footer-container">
                <div className='footerredes'>
                    <div >
                        <h4 className='redestext'>Seguinos en nuestras redes <br /> para mas novedades</h4>
                    </div>
                    <div>
                        <div className="text-center">
                            <h1 className="">Master Bakery</h1>
                        </div>
                        <div className="socials-container">
                            <div>
                                <a className="text-icon" target="_blank" href="https://www.facebook.com/profile.php?id=100094362511413">@facebook <img className=" icon" src="./images/iconos/facebook.png"
                                    alt="" /></a>
                            </div>
                            <div>
                                <a className="text-icon " target="_blank" href="https://www.instagram.com/masterbakery.arg/">@instagram <img className="icon"
                                    src="./images/iconos/instagram.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg">copyright © 2023 Lopez Alexis - Todos los derechos reservados.</p>
                </div>
            </footer>


            {/* whatsapp */}
            {/* <div className="w-[2.5em] sm:w-[4em] xl:w-[6em] fixed right-[1em] bottom-[1em]">
                <a target="_blank" href="https://wa.me/5491126970953?"><img src="./images/iconos/whatsapp.png" alt="icono wp" /></a>
            </div> */}
        </>
    )
}

export default Footer