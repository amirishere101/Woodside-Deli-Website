import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Images/carousel1.avif";
import img2 from "../../assets/Images/carousel2.avif";
import img3 from "../../assets/Images/carousel3.avif";
import img4 from "../../assets/Images/carousel4.jpg";
import img5 from "../../assets/Images/carousel5.avif";

const slides = [
  { img: img1 },
  { img: img5 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="py-4 bg-gray-50">
      <div className="container mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-1 sm:px-2">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={slide.img}
                  className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  alt={`Woodside Deli photo ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
