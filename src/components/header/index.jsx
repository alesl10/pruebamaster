import './style.css'


const Header = () => {

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY > 200;
        const navbar = document.querySelector('#navbar')
        const logo = document.querySelector('#logo')

        if (scrolled) {
            navbar.classList.add('navbar-scrolled')
            logo.classList.remove('logo')
            logo.classList.add('logo-scrolled')
        } else {
            navbar.classList.remove('navbar-scrolled')
            logo.classList.remove('logo-scrolled')
            logo.classList.add('logo')
        }
    })



    return (
        <nav class="navbar navbar-expand-lg naavbar scrolling-navbar fixed-top" id="navbar">
            <div class="container-fluid">
                <div>

                </div>
                <img src="./images/logofinal.png" class="navbar-brand logo " id='logo' href="#"></img>
                <div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#producto">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#quienesSomos">¿Quienes somos?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header