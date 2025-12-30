import React from "react";
import Slider from "react-slick";
import "./Locationsection.css";
import { Container } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import g1 from "../assets/location/g1.jpg";
import g2 from "../assets/location/g2.jpg";
import g3 from "../assets/location/g3.jpg";
import g4 from "../assets/location/g4.jpg";
import g5 from "../assets/location/g5.jpg";


const images = [g1, g2, g3, g4, g5, g1, g2, g3, g4, g5];

const GallerySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <Container className="mb-5">
      <div className="section-title">
        <h1 className="title-bg">Locations and Activities</h1>
        <h2 className="title-front">Locations and Activities</h2>
      </div>
      <Slider {...settings} className="gallery-slider">
        {images.map((img, i) => (
          <div key={i} className="gallery-img-wrap">
            <img src={img} alt="gallery" />
            <div className="gallery-overlay">
              <FaEye />
            </div>
          </div>
        ))}
      </Slider>

      <button className="discover-btn mt-5">
        <b> Discover Our Full Gallery</b>
      </button>

    </Container>
  );
};

export default GallerySlider;

