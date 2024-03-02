import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Images/carousel-img1.jpg";
import img2 from "../../assets/Images/carousel-img2.jpg";
import img3 from "../../assets/Images/carousel-img3.jpg";
import img4 from "../../assets/Images/carousel-img4.jpg";

const slides = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="m-auto">
        <div className="mb-10">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="">
                <div className="flex items-center justify-center">
                  <img
                    src={slide.img}
                    className="object-cover w-screen mb-3 lg:h-96"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
