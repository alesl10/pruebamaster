
const Header = () => {

    
    return (
        <nav class="navbar navbar-expand-lg naavbar ">
            <div class="container-fluid">
                <div>
                    <img src="./public/images/logofinal.png" class="navbar-brand logo " href="#"></img>
                </div>
                <div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#quienessomos">¿Quienes somos?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#producto">Productos</a>
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