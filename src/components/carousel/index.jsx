import React from 'react'
import './index.css'

const Carousel = () => {

    return (

        <div class="carousel-container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <img src="./images/flecha.png" alt="flecha abajo" className='flecha' />
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src="./images/1.jpg" class=" d-block imagen " alt="Imagen carousel 1" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/3.jpg" class="d-block imagen" alt="Imagen carousel 2" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/4.jpg" class=" d-block imagen" alt="Imagen carousel 3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel