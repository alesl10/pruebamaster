// import { Link } from 'react-router-dom';
import './index.css';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Productos({ products }) {

    const destacados = products.filter(p => p.descatado == true)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='producto'>

        <h3 className='titulo-productos'>Nuestros productos</h3>
            <div className='app'>
                <Slider {...settings} >
                    {destacados.map(p => (
                        <div className='card-container'>
                            <div className='card-top'>
                                <img src={p.image4} alt="" className='cardimg' />
                                <p className='textcard'>{p.nombre}</p>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    )
}

export default Productos;