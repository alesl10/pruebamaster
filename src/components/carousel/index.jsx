import React from 'react'

const Carousel = () => {
    return (

        <div class="carousel-container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src="./images/3bffb36e-9f06-4f01-a062-54c7a4c82beb.jpg" class=" image " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./public/images/2.jpg" class="image" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./public/images/3.jpg" class="image" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./public/images/4.jpg" class=" image" alt="..." />
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