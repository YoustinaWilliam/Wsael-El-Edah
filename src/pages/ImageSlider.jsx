import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

import image1 from "../assets/logo.jpeg";
import image2 from "../assets/img1.jpeg";
import image3 from "../assets/img2.jpeg";

function ImageSlider() {
    return (
        <>
            {/* Custom CSS for button hover effect */}
            <style>
                {`
                .carousel-container {
                    position: relative;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                /* The two side red parts */
                .carousel-side {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 15%;
                    background-color: #ff8080; /* Light red */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                }

                .left-side {
                    left: 0;
                }

                .right-side {
                    right: 0;
                }

                /* Navigation buttons */
                .carousel-control-prev,
                .carousel-control-next {
                    position: absolute;
                    background: none;
                    border: none;
                    z-index: 2;
                    font-size: 32px;
                    transition: color 0.3s ease-in-out;
                }

                .carousel-control-prev {
                    left: 50%;
                    transform: translateX(-50%);
                }

                .carousel-control-next {
                    right: 50%;
                    transform: translateX(50%);
                }

                .carousel-control-prev i,
                .carousel-control-next i {
                    color: white; /* Default color */
                    font-size: 36px;
                    transition: color 0.3s ease-in-out;
                }

                .carousel-control-prev:hover i,
                .carousel-control-next:hover i {
                    color: red; /* Turn red on hover */
                }
                `}
            </style>

            <div className="carousel-container">
                {/* Left Red Section */}
                <div className="carousel-side left-side">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                </div>

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active bg-danger" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="bg-danger" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="bg-danger" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner" style={{ width: '100%', height: 'auto', maxHeight: '400px' }}>
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={image1} className="d-block w-100" alt="Slide 1" style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '400px', transition: 'transform 1s ease' }} />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={image2} className="d-block w-100" alt="Slide 2" style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '400px', transition: 'transform 1s ease' }} />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={image3} className="d-block w-100" alt="Slide 3" style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '400px', transition: 'transform 1s ease' }} />
                        </div>
                    </div>
                </div>

                <div className="carousel-side right-side">
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ImageSlider;
